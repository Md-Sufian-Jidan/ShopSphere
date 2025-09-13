import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { teamMembers } from "../../../Constants/TeamMembers";

const TeamSection = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-heading font-bold text-center text-dark mb-12"
                >
                    Meet Our Team
                </motion.h2>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Avatar */}
                            <motion.img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full ring-4 ring-primary/40 shadow-lg mb-4"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Info */}
                            <h3 className="text-lg font-heading font-semibold text-dark">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                            {/* Socials */}
                            <div className="flex gap-4">
                                {member.socials.twitter && (
                                    <motion.a
                                        href={member.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, color: "#F59E0B" }} // accent
                                        className="text-gray-500 hover:text-accent transition-colors"
                                    >
                                        <Twitter size={18} />
                                    </motion.a>
                                )}
                                {member.socials.linkedin && (
                                    <motion.a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, color: "#F59E0B" }}
                                        className="text-gray-500 hover:text-accent transition-colors"
                                    >
                                        <Linkedin size={18} />
                                    </motion.a>
                                )}
                                {member.socials.instagram && (
                                    <motion.a
                                        href={member.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, color: "#F59E0B" }}
                                        className="text-gray-500 hover:text-accent transition-colors"
                                    >
                                        <Instagram size={18} />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
