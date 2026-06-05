// Bottom sheet component - BASELINE WITH SHEET CONTAINER CONTAINMENT
// Protected working copy with sheet-level spatial containment fix
// Based on: ProjectPreviewBottomSheet_BASELINE.tsx
// Change: Sheet container constrained (lines 215-217, 221-223) - correct layer boundary
import { useState, useEffect, startTransition, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

// Hard-coded internal projects data (ORIGINAL WORKING VERSION)
const INTERNAL_PROJECTS = [
    {
        title: "Chase Travel Rewards UX Redesign",
        description: "Using AI to analyze app store reviews, surfacing the Chase travel portal as the top user pain point and proposing strategic improvements to boost usability, conversion, and business impact.",
        image: {
            src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
            alt: "Chase Travel Portal Preview"
        },
        category: "UX Strategy",
        date: "2024",
        duration: "3 months",
        platform: "Mobile App (iOS + Android)",
        headline: "Redesigning Chase's Travel Portal for Loyalty & Conversion",
        subheadline: "Improving booking filters, navigation, and reward redemption to boost trust and usage",
        metric1Number: 21,
        metric1Label: "Negative Reviews - Travel Usability (%)",
        metric2Number: 5,
        metric2Label: "Projected Booking Lift (%)",
        metric3Number: 10,
        metric3Label: "Design & Validation (Weeks)",
        roleTitle: "UX Strategist & Researcher",
        teamMember1Count: 1,
        teamMember1Role: "UX Designer & Researcher (me)",
        teamMember2Count: 1,
        teamMember2Role: "AI Tools (Python, Pandas, NLP)",
        teamMember3Count: 0,
        teamMember3Role: "",
        impactTitle: "Driving measurable retention in high-value cardholders",
        impactBody: "By streamlining travel searches, reward redemptions, and checkout flow, the project aligned UX improvements with Chase's core revenue model — driving loyalty, increasing partner bookings, and reducing drop-offs in a key digital touchpoint.",
        backgroundTitle: "Why this project mattered",
        backgroundBody: "Travel rewards are a competitive differentiator for Chase's premium cards. However, the portal experience felt outdated, frustrating users and limiting redemption rates. This project was initiated to remove friction, match expectations set by competitors, and better monetize partner offers.",
        problemTitle: "Users can't find, filter, or trust travel booking options",
        problemBody: "Customers cited poor filtering, confusing navigation, and unclear reward value as top frustrations. Many abandoned the process or booked outside Chase's portal — reducing retention and reward ROI.",
        usersLabel: "User",
        usersDescription: "Chase Sapphire Reserve cardholder, values premium travel perks and smooth mobile booking.",
        consumersLabel: "Consumer",
        consumersDescription: "Leisure travelers booking for personal trips, often on mobile devices.",
        companyLabel: "Company",
        companyDescription: "Chase, aiming to grow loyalty and partner revenue through the travel portal.",
        features: ["Advanced filtering", "Real-time points conversion", "Streamlined checkout"],
        tags: ["UX Strategy", "Mobile App", "Travel"],
        stats: [
            { name: "Booking Completion", value: "+18%" },
            { name: "User Drop-off", value: "-27%" },
            { name: "App Store Sentiment", value: "+11 pts" }
        ]
    }
]

export default function ProjectPreviewBottomSheet_BASELINE_SHEET_CONTAINED() {
    const projects = INTERNAL_PROJECTS
    
    const cardBackgroundColor = "#FFFFFF"
    const cardTextColor = "#000000"
    const sheetBackgroundColor = "#FFFFFF"
    const sheetTextColor = "#000000"
    const overlayColor = "rgba(0,0,0,0.5)"
    const borderRadius = 12
    const cardFont = { fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: "1.3em" }
    const sheetTitleFont = { fontSize: "32px", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: "1em" }
    const sheetBodyFont = { fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: "1.3em" }
    
    const [selectedProject, setSelectedProject] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
    const [sheetHeight, setSheetHeight] = useState(90)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStartY, setDragStartY] = useState(0)
    const [dragStartHeight, setDragStartHeight] = useState(90)
    
    const isStatic = useIsStaticRenderer()
    
    useEffect(() => {
        if (typeof window === "undefined") return
        const updateSize = () => {
            startTransition(() => {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight })
            })
        }
        updateSize()
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)
    }, [])
    
    const openSheet = (project) => {
        if (isStatic) return
        startTransition(() => {
            setSelectedProject(project)
            setIsOpen(true)
            setSheetHeight(90)
        })
    }
    
    const closeSheet = () => {
        if (isStatic) return
        startTransition(() => {
            setIsOpen(false)
            setTimeout(() => setSelectedProject(null), 300)
        })
    }
    
    const isMobile = windowSize.width < 768
    const isTablet = windowSize.width >= 768 && windowSize.width < 1024
    
    const getGridConfig = () => {
        if (isMobile) return "1fr"
        if (isTablet) return "repeat(2, 1fr)"
        return "repeat(auto-fit, minmax(320px, 1fr))"
    }
    
    const getContainerPadding = () => {
        if (isMobile) return "12px"
        if (isTablet) return "16px"
        return "20px"
    }
    
    const getCardImageHeight = () => {
        if (isMobile) return "160px"
        if (isTablet) return "180px"
        return "200px"
    }
    
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: getGridConfig(),
                gap: isMobile ? "32px" : "40px",
                padding: getContainerPadding(),
                height: "100%",
                overflowY: "auto"
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        style={{
                            backgroundColor: cardBackgroundColor,
                            borderRadius: borderRadius,
                            overflow: "hidden",
                            cursor: isStatic ? "default" : "pointer",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            ...cardFont,
                            minHeight: "fit-content"
                        }}
                        whileHover={isStatic ? {} : { y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                        whileTap={isStatic ? {} : { scale: 0.98 }}
                        onClick={() => openSheet(project)}
                    >
                        <div style={{
                            width: "100%",
                            height: getCardImageHeight(),
                            backgroundImage: `url(${project.image.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }} />
                        <div style={{ padding: isMobile ? "12px" : "16px", color: cardTextColor }}>
                            <h3 style={{
                                margin: "0 0 8px 0",
                                fontSize: isMobile ? "16px" : "18px",
                                fontWeight: "600",
                                lineHeight: "1.2"
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                margin: "0 0 8px 0",
                                fontSize: isMobile ? "13px" : "14px",
                                opacity: 0.7,
                                lineHeight: "1.4"
                            }}>
                                {project.description.substring(0, isMobile ? 80 : 100)}...
                            </p>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontSize: isMobile ? "11px" : "12px",
                                opacity: 0.6
                            }}>
                                <span>{project.category}</span>
                                <span>{project.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <AnimatePresence>
                {isOpen && selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: overlayColor,
                                zIndex: 999
                            }}
                            onClick={closeSheet}
                        />
                        <motion.div
                            initial={{ y: "100%", x: "-50%" }}
                            animate={{ y: `${100 - sheetHeight}%`, x: "-50%" }}
                            exit={{ y: "100%", x: "-50%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            style={{
                                position: "fixed",
                                left: "50%",
                                width: "100%",
                                maxWidth: isMobile ? "100%" : "1040px",
                                bottom: 0,
                                height: `${sheetHeight}vh`,
                                backgroundColor: sheetBackgroundColor,
                                borderTopLeftRadius: borderRadius,
                                borderTopRightRadius: borderRadius,
                                zIndex: 1000,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <div style={{
                                padding: isMobile ? "16px" : "24px",
                                borderBottom: "1px solid rgba(0,0,0,0.1)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <h2 style={{
                                    margin: 0,
                                    ...sheetTitleFont,
                                    fontSize: isMobile ? "24px" : sheetTitleFont.fontSize,
                                    color: sheetTextColor
                                }}>
                                    {selectedProject.title}
                                </h2>
                                <button
                                    onClick={closeSheet}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        fontSize: "24px",
                                        cursor: "pointer",
                                        padding: "8px",
                                        color: sheetTextColor
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                            <div style={{
                                flex: 1,
                                overflowY: "auto",
                                padding: isMobile ? "16px" : "24px"
                            }}>
                                <p style={{
                                    ...sheetBodyFont,
                                    color: sheetTextColor,
                                    marginBottom: "16px"
                                }}>
                                    {selectedProject.headline}
                                </p>
                                <p style={{
                                    ...sheetBodyFont,
                                    color: sheetTextColor,
                                    opacity: 0.8
                                }}>
                                    {selectedProject.description}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
