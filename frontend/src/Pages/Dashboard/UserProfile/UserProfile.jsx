import { Edit2 } from "lucide-react";

const UserProfile = ({ user }) => {
    // Example user object if not passed as prop
    const defaultUser = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        address: "123 Main Street, City, Country",
        profilePic: "https://i.pravatar.cc/150?img=12",
    };

    const currentUser = user || defaultUser;

    return (
        <div className="flex justify-center items-start p-6 bg-light min-h-screen">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold text-primary">Profile</h1>
                    <button className="flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                        <Edit2 className="w-4 h-4" /> Edit
                    </button>
                </div>

                {/* Profile content */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile picture */}
                    <div className="flex flex-col items-center md:items-start md:w-1/3">
                        <img
                            src={currentUser.profilePic}
                            alt={currentUser.name}
                            className="w-40 h-40 rounded-full border-4 border-primary shadow-sm object-cover"
                        />
                        <h2 className="mt-4 text-xl font-medium text-dark">{currentUser.name}</h2>
                        <p className="text-gray-500">{currentUser.email}</p>
                    </div>

                    {/* Details */}
                    <div className="md:w-2/3 bg-light p-6 rounded-xl shadow-inner">
                        <h3 className="text-lg font-semibold text-dark mb-4">Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 text-sm">Full Name</p>
                                <p className="text-dark font-medium">{currentUser.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Email</p>
                                <p className="text-dark font-medium">{currentUser.email}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Phone</p>
                                <p className="text-dark font-medium">{currentUser.phone}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Address</p>
                                <p className="text-dark font-medium">{currentUser.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional extra section */}
                <div className="mt-6 p-4 bg-light rounded-xl shadow-inner">
                    <h3 className="text-lg font-semibold text-dark mb-2">Other Information</h3>
                    <p className="text-gray-500 text-sm">
                        You can add more fields here like account settings, membership status, or recent activity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
