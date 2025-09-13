import { motion } from "framer-motion";
import { milestones } from "../../../Constants/Milestons";

const JourneyTimeline = () => {
    return (
        <section className="relative py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-heading font-bold text-center text-dark mb-12"
                >
                    Our Journey
                </motion.h2>

                {/* Timeline */}
                <div className="relative border-l-4 border-primary/60 pl-10 space-y-12">
                    {milestones.map((milestone, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative"
                        >
                            {/* Dot */}
                            <span className="absolute -left-[38px] top-2 w-6 h-6 rounded-full bg-accent border-4 border-white dark:border-gray-900 shadow-lg"></span>

                            {/* Content */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                                    {milestone.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                    {milestone.desc}
                                </p>
                                <span className="text-xs text-gray-400 font-medium">
                                    {milestone.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneyTimeline;
