// CaseStudy00Template - Static proof of Case Study 00 with hardcoded content
import SectionWrapper from "./SectionWrapper"
import ProjectHero from "./ProjectHero"
import MediaBlock from "./MediaBlock"

export default function CaseStudy00Template() {
    const bodyTextStyle = {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#333333",
        marginBottom: "16px"
    }

    const headingStyle = {
        fontSize: "28px",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: "1.2",
        margin: "0 0 24px 0",
        color: "#000000"
    }

    const subheadingStyle = {
        fontSize: "20px",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        lineHeight: "1.3",
        margin: "32px 0 16px 0",
        color: "#000000"
    }

    return (
        <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
            <ProjectHero
                title="Chase Travel Rewards UX Redesign"
                subtitle="Redesigning Chase's Travel Portal for Loyalty & Conversion"
                year="2024"
                projectType="UX Strategy"
                role="UX Strategist & Researcher"
                duration="3 months"
                platform="Mobile App (iOS + Android)"
            />

            <SectionWrapper maxWidth="narrow" padding="medium">
                <h2 style={headingStyle}>Overview</h2>
                <p style={bodyTextStyle}>
                    Using AI to analyze app store reviews, surfacing the Chase travel portal as the top user pain point and proposing strategic improvements to boost usability, conversion, and business impact.
                </p>
                <p style={bodyTextStyle}>
                    Travel rewards are a competitive differentiator for Chase's premium cards. However, the portal experience felt outdated, frustrating users and limiting redemption rates. This project was initiated to remove friction, match expectations set by competitors, and better monetize partner offers.
                </p>
            </SectionWrapper>

            <SectionWrapper maxWidth="narrow" padding="medium">
                <h2 style={headingStyle}>Challenge</h2>
                <p style={bodyTextStyle}>
                    Customers cited poor filtering, confusing navigation, and unclear reward value as top frustrations. Many abandoned the process or booked outside Chase's portal — reducing retention and reward ROI.
                </p>
                <p style={bodyTextStyle}>
                    The core problem: users couldn't find, filter, or trust travel booking options. This led to high drop-off rates and missed revenue opportunities for Chase's partner ecosystem.
                </p>
            </SectionWrapper>

            <SectionWrapper maxWidth="wide" padding="medium">
                <MediaBlock
                    src="https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg"
                    alt="Chase Travel Portal Preview"
                    caption="Current Chase travel portal interface"
                    size="large"
                />
            </SectionWrapper>

            <SectionWrapper maxWidth="narrow" padding="medium">
                <h2 style={headingStyle}>Process</h2>
                
                <h3 style={subheadingStyle}>Discovery & Research</h3>
                <p style={bodyTextStyle}>
                    Analyzed 10,000+ app store reviews using NLP to identify top pain points. Travel portal emerged as #1 usability issue (21% of negative reviews). Key findings included poor mobile filtering, unclear points conversion, and confusing checkout flow.
                </p>

                <h3 style={subheadingStyle}>Competitive Analysis</h3>
                <p style={bodyTextStyle}>
                    Benchmarked against Amex, Capital One, and Citi travel portals. Identified gaps in filtering capabilities, reward transparency, and mobile UX. Competitors offered real-time points conversion and advanced filtering that Chase lacked.
                </p>

                <h3 style={subheadingStyle}>Design & Prototyping</h3>
                <p style={bodyTextStyle}>
                    Created high-fidelity prototypes for advanced filtering, real-time points conversion, and streamlined checkout flow. Focused on mobile-first design since 67% of travel bookings happen on mobile devices.
                </p>

                <h3 style={subheadingStyle}>Testing & Validation</h3>
                <p style={bodyTextStyle}>
                    Conducted usability testing with 15 Chase Sapphire Reserve cardholders. Validated that new filtering and points display significantly improved trust and booking intent. Projected 5% booking lift based on test results.
                </p>
            </SectionWrapper>

            <SectionWrapper maxWidth="narrow" padding="medium">
                <h2 style={headingStyle}>Key Decisions</h2>
                
                <div style={{ 
                    background: "#F5F5F5", 
                    padding: "24px", 
                    borderRadius: "8px",
                    marginBottom: "24px"
                }}>
                    <h4 style={{ 
                        fontSize: "16px", 
                        fontWeight: 600, 
                        margin: "0 0 8px 0",
                        color: "#000000"
                    }}>
                        Prioritize mobile-first filtering
                    </h4>
                    <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
                        67% of travel bookings happen on mobile, but current filters were desktop-optimized. Redesigned filtering for touch-first interaction with larger tap targets and simplified options.
                    </p>
                </div>

                <div style={{ 
                    background: "#F5F5F5", 
                    padding: "24px", 
                    borderRadius: "8px"
                }}>
                    <h4 style={{ 
                        fontSize: "16px", 
                        fontWeight: 600, 
                        margin: "0 0 8px 0",
                        color: "#000000"
                    }}>
                        Show points value in real-time
                    </h4>
                    <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
                        Users didn't trust portal pricing without seeing exact points conversion upfront. Added real-time points calculator visible on all search results to build confidence.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper maxWidth="narrow" padding="medium">
                <h2 style={headingStyle}>Outcomes</h2>
                <p style={bodyTextStyle}>
                    By streamlining travel searches, reward redemptions, and checkout flow, the project aligned UX improvements with Chase's core revenue model — driving loyalty, increasing partner bookings, and reducing drop-offs in a key digital touchpoint.
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
            </SectionWrapper>

            <SectionWrapper maxWidth="narrow" padding="large">
                <h2 style={headingStyle}>Reflection</h2>
                <p style={bodyTextStyle}>
                    This project demonstrated the power of data-driven UX research. By analyzing thousands of user reviews with AI, we identified the exact pain points that traditional research might have missed. The mobile-first approach proved critical — desktop-optimized solutions would have failed to address the majority use case.
                </p>
                <p style={bodyTextStyle}>
                    Key learning: Real-time transparency (points conversion) was more valuable than aesthetic improvements. Users needed confidence in pricing before they cared about visual polish.
                </p>
            </SectionWrapper>
        </div>
    )
}
