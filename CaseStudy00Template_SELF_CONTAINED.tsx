// CaseStudy00Template_SELF_CONTAINED - Self-contained version with no imports for Framer registration test

export default function CaseStudy00Template_SELF_CONTAINED() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    return (
        <div style={{ width: "100%", minHeight: "100vh", background: "#FFFFFF" }}>
            {/* Hero Section */}
            <div style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: isMobile ? "48px 16px" : "80px 32px",
                width: "100%"
            }}>
                <h1 style={{
                    fontSize: isMobile ? "32px" : "48px",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: "1.1",
                    margin: "0 0 16px 0",
                    color: "#000000"
                }}>
                    Chase Travel Rewards UX Redesign
                </h1>
                <p style={{
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: "1.3",
                    margin: "0 0 32px 0",
                    color: "#666666"
                }}>
                    Redesigning Chase's Travel Portal for Loyalty & Conversion
                </p>
                
                <div style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "12px" : "24px",
                    fontSize: "14px",
                    color: "#666666"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#999999" }}>Year</span>
                        <span style={{ fontSize: "14px", fontWeight: 500, color: "#000000" }}>2024</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#999999" }}>Type</span>
                        <span style={{ fontSize: "14px", fontWeight: 500, color: "#000000" }}>UX Strategy</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#999999" }}>Role</span>
                        <span style={{ fontSize: "14px", fontWeight: 500, color: "#000000" }}>UX Strategist & Researcher</span>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div style={{
                maxWidth: "640px",
                margin: "0 auto",
                padding: isMobile ? "48px 16px" : "48px 32px",
                width: "100%"
            }}>
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: "1.2",
                    margin: "0 0 24px 0",
                    color: "#000000"
                }}>
                    Overview
                </h2>
                <p style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#333333",
                    marginBottom: "16px"
                }}>
                    Using AI to analyze app store reviews, surfacing the Chase travel portal as the top user pain point and proposing strategic improvements to boost usability, conversion, and business impact.
                </p>
                <p style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#333333",
                    marginBottom: "16px"
                }}>
                    Travel rewards are a competitive differentiator for Chase's premium cards. However, the portal experience felt outdated, frustrating users and limiting redemption rates.
                </p>
            </div>

            {/* Challenge Section */}
            <div style={{
                maxWidth: "640px",
                margin: "0 auto",
                padding: isMobile ? "48px 16px" : "48px 32px",
                width: "100%"
            }}>
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: "1.2",
                    margin: "0 0 24px 0",
                    color: "#000000"
                }}>
                    Challenge
                </h2>
                <p style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#333333",
                    marginBottom: "16px"
                }}>
                    Customers cited poor filtering, confusing navigation, and unclear reward value as top frustrations. Many abandoned the process or booked outside Chase's portal.
                </p>
            </div>

            {/* Outcomes Section */}
            <div style={{
                maxWidth: "640px",
                margin: "0 auto",
                padding: isMobile ? "48px 16px" : "48px 32px",
                width: "100%"
            }}>
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: "1.2",
                    margin: "0 0 24px 0",
                    color: "#000000"
                }}>
                    Outcomes
                </h2>
                <p style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#333333",
                    marginBottom: "16px"
                }}>
                    By streamlining travel searches, reward redemptions, and checkout flow, the project aligned UX improvements with Chase's core revenue model.
                </p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px",
                    marginTop: "32px"
                }}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{
                            fontSize: "48px",
                            fontWeight: 700,
                            color: "#000000",
                            marginBottom: "8px"
                        }}>
                            +5%
                        </div>
                        <div style={{ fontSize: "14px", color: "#666666" }}>
                            Projected Booking Lift
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{
                            fontSize: "48px",
                            fontWeight: 700,
                            color: "#000000",
                            marginBottom: "8px"
                        }}>
                            -27%
                        </div>
                        <div style={{ fontSize: "14px", color: "#666666" }}>
                            User Drop-off Reduction
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{
                            fontSize: "48px",
                            fontWeight: 700,
                            color: "#000000",
                            marginBottom: "8px"
                        }}>
                            +11
                        </div>
                        <div style={{ fontSize: "14px", color: "#666666" }}>
                            App Store Sentiment (pts)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
