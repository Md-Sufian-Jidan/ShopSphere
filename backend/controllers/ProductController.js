import Products from "../models/Products";

/**
 * @desc    Get all products with filters
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, category, minPrice, maxPrice, sort, search } = req.query;

        const query = { isVisible: true };

        if (category) query.category = category;
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        const sortOption = {};
        if (sort === "price_asc") sortOption.price = 1;
        else if (sort === "price_desc") sortOption.price = -1;
        else if (sort === "newest") sortOption.createdAt = -1;

        const products = await Product.find(query)
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Products.countDocuments(query);

        res.json({
            products,
            pagination: {
                total,
                page: Number(page),
                pages: Math.ceil(total / limit),
            },
        });
    } catch (err) {
        next(err);
    }
};

/**
 * @desc    Get single product
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (err) {
        next(err);
    }
};

/**
 * @desc    Create new product
 * @route   POST /api/products
 * @access  Admin
 */
export const createProduct = async (req, res, next) => {
    try {
        const { title, slug, description, price, stock, category, images, isVisible, featured } =
            req.body;

        const exists = await Product.findOne({ slug });
        if (exists) return res.status(400).json({ message: "Slug already exists" });

        const product = await Product.create({
            title,
            slug,
            description,
            price,
            stock,
            category,
            images,
            isVisible,
            featured,
        });

        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
};

/**
 * @desc    Update product
 * @route   PUT /api/products/:id
 * @access  Admin
 */
export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (err) {
        next(err);
    }
};

/**
 * @desc    Delete product
 * @route   DELETE /api/products/:id
 * @access  Admin
 */
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product removed" });
    } catch (err) {
        next(err);
    }
};
