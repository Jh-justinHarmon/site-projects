// Amare_SELF_CONTAINED - Self-contained renderer for Amare case study

export default function Amare_SELF_CONTAINED() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    return (
        <div style={{ 
            width: "100%", 
            minHeight: "100vh", 
            background: "#FFFFFF",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        }}>
            {/* Hero Section */}
            <div style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: isMobile ? "64px 20px" : "96px 32px",
                width: "100%"
            }}>
                <div style={{
                    fontSize: isMobile ? "12px" : "13px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#999999",
                    marginBottom: isMobile ? "16px" : "20px"
                }}>
                    Case Study
                </div>
                
                <h1 style={{
                    fontSize: isMobile ? "40px" : "56px",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: "1.1",
                    margin: "0 0 20px 0",
                    color: "#000000"
                }}>
                    Amare
                </h1>
                
                <p style={{
                    fontSize: isMobile ? "20px" : "28px",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    lineHeight: "1.3",
                    margin: "0 0 48px 0",
                    color: "#555555"
                }}>
                    Building a Mental Wellness Platform for High-Performing Teams
                </p>
                
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                    gap: isMobile ? "20px" : "32px",
                    paddingTop: "32px",
                    borderTop: "1px solid #E5E5E5"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ 
                            fontSize: "11px", 
                            textTransform: "uppercase", 
                            letterSpacing: "0.08em", 
                            fontWeight: 600,
                            color: "#999999" 
                        }}>
                            Year
                        </span>
                        <span style={{ 
                            fontSize: "15px", 
                            fontWeight: 600, 
                            color: "#000000",
                            letterSpacing: "-0.01em"
                        }}>
                            2023
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ 
                            fontSize: "11px", 
                            textTransform: "uppercase", 
                            letterSpacing: "0.08em", 
                            fontWeight: 600,
                            color: "#999999" 
                        }}>
                            Type
                        </span>
                        <span style={{ 
                            fontSize: "15px", 
                            fontWeight: 600, 
                            color: "#000000",
                            letterSpacing: "-0.01em"
                        }}>
                            Product Strategy
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ 
                            fontSize: "11px", 
                            textTransform: "uppercase", 
                            letterSpacing: "0.08em", 
                            fontWeight: 600,
                            color: "#999999" 
                        }}>
                            Role
                        </span>
                        <span style={{ 
                            fontSize: "15px", 
                            fontWeight: 600, 
                            color: "#000000",
                            letterSpacing: "-0.01em"
                        }}>
                            Product Strategist
                        </span>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div style={{
                maxWidth: "680px",
                margin: "0 auto",
                padding: isMobile ? "64px 20px" : "80px 32px",
                width: "100%"
            }}>
                <h2 style={{
                    fontSize: isMobile ? "28px" : "36px",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    lineHeight: "1.2",
                    margin: "0 0 28px 0",
                    color: "#000000"
                }}>
                    Overview
                </h2>
                <p style={{
                    fontSize: isMobile ? "17px" : "19px",
                    lineHeight: "1.7",
                    color: "#333333",
                    marginBottom: "20px",
                    letterSpacing: "-0.01em"
                }}>
                    Amare is a mental wellness platform designed for high-performing teams in demanding industries. The platform combines evidence-based interventions with real-time mood tracking, creating a proactive approach to workplace mental health.
                </p>
                <p style={{
                    fontSize: isMobile ? "17px" : "19px",
                    lineHeight: "1.7",
                    color: "#333333",
                    marginBottom: "20px",
                    letterSpacing: "-0.01em"
                }}>
                    As product strategist, I led the discovery and definition phases, translating clinical research into product requirements and designing the core user experience architecture.
                </p>
            </div>

            {/* Challenge Section */}
            <div style={{
                background: "#F9F9F9",
                padding: isMobile ? "64px 0" : "80px 0",
                width: "100%"
            }}>
                <div style={{
                    maxWidth: "680px",
                    margin: "0 auto",
                    padding: isMobile ? "0 20px" : "0 32px",
                    width: "100%"
                }}>
                    <h2 style={{
                        fontSize: isMobile ? "28px" : "36px",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        lineHeight: "1.2",
                        margin: "0 0 28px 0",
                        color: "#000000"
                    }}>
                        Challenge
                    </h2>
                    <p style={{
                        fontSize: isMobile ? "17px" : "19px",
                        lineHeight: "1.7",
                        color: "#333333",
                        marginBottom: "20px",
                        letterSpacing: "-0.01em"
                    }}>
                        Traditional mental health solutions are reactive—they intervene after burnout or crisis. High-performing teams need proactive tools that integrate into daily workflows without adding friction.
                    </p>
                    <p style={{
                        fontSize: isMobile ? "17px" : "19px",
                        lineHeight: "1.7",
                        color: "#333333",
                        marginBottom: "20px",
                        letterSpacing: "-0.01em"
                    }}>
                        The challenge was designing a system that feels supportive rather than surveillance-oriented, while providing meaningful insights to both individuals and team leaders.
                    </p>
                </div>
            </div>

            {/* Process Section */}
            <div style={{
                maxWidth: "680px",
                margin: "0 auto",
                padding: isMobile ? "64px 20px" : "80px 32px",
                width: "100%"
            }}>
                <h2 style={{
                    fontSize: isMobile ? "28px" : "36px",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    lineHeight: "1.2",
                    margin: "0 0 28px 0",
                    color: "#000000"
                }}>
                    Process
                </h2>
                
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: isMobile ? "32px" : "40px"
                }}>
                    <div>
                        <h3 style={{
                            fontSize: isMobile ? "20px" : "22px",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            lineHeight: "1.3",
                            margin: "0 0 12px 0",
                            color: "#000000"
                        }}>
                            Research & Discovery
                        </h3>
                        <p style={{
                            fontSize: isMobile ? "17px" : "19px",
                            lineHeight: "1.7",
                            color: "#333333",
                            margin: 0,
                            letterSpacing: "-0.01em"
                        }}>
                            Conducted interviews with 30+ professionals in high-stress roles (consulting, finance, healthcare) to understand existing coping mechanisms and pain points with current wellness tools.
                        </p>
                    </div>
                    
                    <div>
                        <h3 style={{
                            fontSize: isMobile ? "20px" : "22px",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            lineHeight: "1.3",
                            margin: "0 0 12px 0",
                            color: "#000000"
                        }}>
                            Clinical Translation
                        </h3>
                        <p style={{
                            fontSize: isMobile ? "17px" : "19px",
                            lineHeight: "1.7",
                            color: "#333333",
                            margin: 0,
                            letterSpacing: "-0.01em"
                        }}>
                            Partnered with clinical psychologists to translate evidence-based interventions (CBT, mindfulness, stress inoculation) into micro-interactions that fit into 2-5 minute daily check-ins.
                        </p>
                    </div>
                    
                    <div>
                        <h3 style={{
                            fontSize: isMobile ? "20px" : "22px",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            lineHeight: "1.3",
                            margin: "0 0 12px 0",
                            color: "#000000"
                        }}>
                            Privacy-First Architecture
                        </h3>
                        <p style={{
                            fontSize: isMobile ? "17px" : "19px",
                            lineHeight: "1.7",
                            color: "#333333",
                            margin: 0,
                            letterSpacing: "-0.01em"
                        }}>
                            Designed a dual-layer data model: individual data remains private and encrypted, while anonymized aggregate patterns surface to team leaders—balancing personal safety with organizational insight.
                        </p>
                    </div>
                    
                    <div>
                        <h3 style={{
                            fontSize: isMobile ? "20px" : "22px",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            lineHeight: "1.3",
                            margin: "0 0 12px 0",
                            color: "#000000"
                        }}>
                            Prototyping & Testing
                        </h3>
                        <p style={{
                            fontSize: isMobile ? "17px" : "19px",
                            lineHeight: "1.7",
                            color: "#333333",
                            margin: 0,
                            letterSpacing: "-0.01em"
                        }}>
                            Built interactive prototypes and ran 3-week pilot programs with 4 teams (120 users total), iterating on notification timing, intervention phrasing, and dashboard design based on daily feedback.
                        </p>
                    </div>
                </div>
            </div>

            {/* Outcomes Section */}
            <div style={{
                background: "#000000",
                color: "#FFFFFF",
                padding: isMobile ? "64px 0" : "80px 0",
                width: "100%"
            }}>
                <div style={{
                    maxWidth: "680px",
                    margin: "0 auto",
                    padding: isMobile ? "0 20px" : "0 32px",
                    width: "100%"
                }}>
                    <h2 style={{
                        fontSize: isMobile ? "28px" : "36px",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        lineHeight: "1.2",
                        margin: "0 0 28px 0",
                        color: "#FFFFFF"
                    }}>
                        Outcomes
                    </h2>
                    <p style={{
                        fontSize: isMobile ? "17px" : "19px",
                        lineHeight: "1.7",
                        color: "#CCCCCC",
                        marginBottom: "48px",
                        letterSpacing: "-0.01em"
                    }}>
                        The platform launched with 8 enterprise clients and demonstrated measurable impact on team wellbeing and performance metrics.
                    </p>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        gap: isMobile ? "32px" : "48px",
                        paddingTop: "32px",
                        borderTop: "1px solid #333333"
                    }}>
                        <div>
                            <div style={{
                                fontSize: isMobile ? "48px" : "56px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginBottom: "8px",
                                letterSpacing: "-0.03em"
                            }}>
                                73%
                            </div>
                            <div style={{ 
                                fontSize: "15px", 
                                color: "#999999",
                                lineHeight: "1.5",
                                letterSpacing: "-0.01em"
                            }}>
                                Daily engagement rate after 3 months
                            </div>
                        </div>
                        <div>
                            <div style={{
                                fontSize: isMobile ? "48px" : "56px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginBottom: "8px",
                                letterSpacing: "-0.03em"
                            }}>
                                -31%
                            </div>
                            <div style={{ 
                                fontSize: "15px", 
                                color: "#999999",
                                lineHeight: "1.5",
                                letterSpacing: "-0.01em"
                            }}>
                                Reduction in reported burnout symptoms
                            </div>
                        </div>
                        <div>
                            <div style={{
                                fontSize: isMobile ? "48px" : "56px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginBottom: "8px",
                                letterSpacing: "-0.03em"
                            }}>
                                4.6
                            </div>
                            <div style={{ 
                                fontSize: "15px", 
                                color: "#999999",
                                lineHeight: "1.5",
                                letterSpacing: "-0.01em"
                            }}>
                                Average user rating (out of 5)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reflection Section */}
            <div style={{
                maxWidth: "680px",
                margin: "0 auto",
                padding: isMobile ? "64px 20px 96px" : "80px 32px 120px",
                width: "100%"
            }}>
                <h2 style={{
                    fontSize: isMobile ? "28px" : "36px",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    lineHeight: "1.2",
                    margin: "0 0 28px 0",
                    color: "#000000"
                }}>
                    Reflection
                </h2>
                <p style={{
                    fontSize: isMobile ? "17px" : "19px",
                    lineHeight: "1.7",
                    color: "#333333",
                    marginBottom: "20px",
                    letterSpacing: "-0.01em"
                }}>
                    This project reinforced the importance of designing for trust in sensitive domains. Early user feedback revealed that the tone and framing of interventions mattered as much as their clinical validity—users needed to feel supported, not diagnosed.
                </p>
                <p style={{
                    fontSize: isMobile ? "17px" : "19px",
                    lineHeight: "1.7",
                    color: "#333333",
                    marginBottom: "20px",
                    letterSpacing: "-0.01em"
                }}>
                    The privacy-first architecture became a competitive differentiator. By making individual data truly private while surfacing anonymized team patterns, we built trust with both employees and leadership—a balance that many wellness platforms struggle to achieve.
                </p>
                <p style={{
                    fontSize: isMobile ? "17px" : "19px",
                    lineHeight: "1.7",
                    color: "#333333",
                    margin: 0,
                    letterSpacing: "-0.01em"
                }}>
                    The success of Amare validated a hypothesis: mental wellness tools don't need to be clinical or heavy-handed. When integrated thoughtfully into daily workflows with the right tone and privacy guarantees, they can become a natural part of high-performing team culture.
                </p>
            </div>
        </div>
    )
}
