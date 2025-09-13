import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

const ContactHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-purple-600">
            {/* Subtle Animated Background Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-accent/15 rounded-full blur-2xl animate-pulse delay-300"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Floating Icons */}
                <div className="flex justify-center items-center gap-8 mb-10">
                    {[{ icon: Mail }, { icon: MessageCircle }, { icon: Phone }].map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-full flex justify-center items-center text-white text-xl transition-transform duration-300 group-hover:scale-110">
                                <item.icon className="w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Let&apos;s Create Something <br />
                    <span className="text-accent">Amazing Together</span>
                </h1>

                <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                    Ready to transform your ideas into reality? We&apos;re here to listen, collaborate,
                    and bring your vision to life with <span className="text-accent font-semibold">ShopSphere</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3 bg-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105">
                        Start a Conversation
                    </button>
                    <button className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition transform hover:scale-105 flex items-center gap-2 justify-center">
                        <MessageCircle className="w-5 h-5" /> Quick Chat
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
