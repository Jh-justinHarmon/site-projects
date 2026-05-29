// Bottom sheet component with adapter for Framer project data
import { useState, useEffect, startTransition, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"
import { generatedProjects } from "./generated/generatedProjects"

// Adapter: Normalized JSON → Flat structure (renderer-compatible)
function adaptProject(project) {
    return {
        // Pass through unchanged fields
        title: project.title,
        category: project.category,
        date: project.date,
        description: project.description,
        image: project.image,
        
        // Flatten header
        duration: project.header?.duration,
        platform: project.header?.platform,
        headline: project.header?.headline,
        subheadline: project.header?.subheadline,
        
        // Flatten metrics array → metric1Number, metric1Label, etc.
        metric1Number: project.metrics?.[0]?.number,
        metric1Label: project.metrics?.[0]?.label,
        metric2Number: project.metrics?.[1]?.number,
        metric2Label: project.metrics?.[1]?.label,
        metric3Number: project.metrics?.[2]?.number,
        metric3Label: project.metrics?.[2]?.label,
        
        // Flatten role
        roleTitle: project.role?.title,
        teamMember1Count: project.role?.team?.[0]?.count,
        teamMember1Role: project.role?.team?.[0]?.role,
        teamMember2Count: project.role?.team?.[1]?.count,
        teamMember2Role: project.role?.team?.[1]?.role,
        teamMember3Count: project.role?.team?.[2]?.count || 0,
        teamMember3Role: project.role?.team?.[2]?.role || "",
        
        // Flatten impact
        impactTitle: project.impact?.title,
        impactBody: project.impact?.body,
        
        // Flatten background
        backgroundTitle: project.background?.title,
        backgroundBody: project.background?.body,
        
        // Flatten problem
        problemTitle: project.problem?.title,
        problemBody: project.problem?.body,
        
        // Flatten personas array → usersLabel, consumersLabel, companyLabel
        usersLabel: project.personas?.[0]?.label,
        usersDescription: project.personas?.[0]?.description,
        consumersLabel: project.personas?.[1]?.label,
        consumersDescription: project.personas?.[1]?.description,
        companyLabel: project.personas?.[2]?.label,
        companyDescription: project.personas?.[2]?.description,
        
        // Pass through arrays (already compatible)
        features: project.features || [],
        tags: project.tags || [],
        stats: project.stats || []
    }
}

export default function ProjectPreviewBottomSheet(props) {
    // Apply adapter to generated projects
    const projects = generatedProjects.map(project => adaptProject(project))
    
    // Styling values
    const cardBackgroundColor = "#FFFFFF"
    const cardTextColor = "#000000"
    const sheetBackgroundColor = "#FFFFFF"
    const sheetTextColor = "#000000"
    const overlayColor = "rgba(0,0,0,0.5)"
    const borderRadius = 12
    const cardFont = { fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: "1.3em" }
    const sheetTitleFont = { fontSize: "32px", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: "1em" }
    const sheetBodyFont = { fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: "1.3em" }
    
    // State
    const [selectedProject, setSelectedProject] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
    const [sheetHeight, setSheetHeight] = useState(90)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStartY, setDragStartY] = useState(0)
    const [dragStartHeight, setDragStartHeight] = useState(90)
    
    const isStatic = useIsStaticRenderer()
    
    // Track window size
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
    
    // Drag handlers
    const handleMouseDown = useCallback((e) => {
        if (isStatic) return
        e.preventDefault()
        e.stopPropagation()
        startTransition(() => {
            setIsDragging(true)
            setDragStartY(e.clientY)
            setDragStartHeight(sheetHeight)
        })
    }, [isStatic, sheetHeight])
    
    const handleMouseMove = useCallback((e) => {
        if (!isDragging || isStatic) return
        
        const deltaY = dragStartY - e.clientY
        const deltaPercent = (deltaY / windowSize.height) * 100
        const newHeight = Math.max(40, Math.min(100, dragStartHeight + deltaPercent))
        const minHeightFromTop = ((windowSize.height - 64) / windowSize.height) * 100
        const constrainedHeight = Math.max(40, Math.min(minHeightFromTop, newHeight))
        
        startTransition(() => {
            setSheetHeight(constrainedHeight)
        })
    }, [isDragging, dragStartY, dragStartHeight, windowSize.height, isStatic])
    
    const handleMouseUp = useCallback(() => {
        if (isStatic) return
        startTransition(() => {
            setIsDragging(false)
        })
    }, [isStatic])
    
    useEffect(() => {
        if (isStatic) return
        
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
            document.body.style.userSelect = "none"
        }
        
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
            document.body.style.userSelect = ""
        }
    }, [isDragging, handleMouseMove, handleMouseUp, isStatic])
    
    // Responsive breakpoints
    const isMobile = windowSize.width < 768
    const isTablet = windowSize.width >= 768 && windowSize.width < 1024
    
    // Sheet controls
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
    
    // Escape key handler
    useEffect(() => {
        if (isStatic) return
        
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                closeSheet()
            }
        }
        
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", handleEscape)
            return () => window.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen, isStatic])
    
    // Responsive helpers
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
    
    const getSheetImageHeight = () => {
        if (isMobile) return "200px"
        if (isTablet) return "250px"
        return "300px"
    }
    
    // Utility functions
    const isEmpty = (val) => typeof val !== "string" || val.trim().length === 0
    const isValidNumber = (val) => typeof val === "number" && isFinite(val)
    const isNonEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0
    
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            {/* Project Cards Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: getGridConfig(),
                gap: isMobile ? "32px" : "40px",
                padding: getContainerPadding(),
                height: "100%",
                overflowY: "auto"
            }}>
                {projects.map((project, index) => {
                    // Apply adapter to each project for rendering
                    const adaptedProject = adaptProject(project)
                    const projectImage = adaptedProject.image || {
                        src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
                        alt: "Project Preview"
                    }
                    
                    return (
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
                            onClick={() => openSheet(adaptedProject)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    openSheet(adaptedProject)
                                }
                            }}
                            aria-label={`View ${adaptedProject.title} project details`}
                        >
                            {/* Card Image */}
                            <div style={{
                                width: "100%",
                                height: getCardImageHeight(),
                                backgroundImage: `url(${projectImage.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }} />
                            
                            {/* Card Content */}
                            <div style={{ padding: isMobile ? "12px" : "16px", color: cardTextColor }}>
                                <h3 style={{
                                    margin: "0 0 8px 0",
                                    fontSize: isMobile ? "16px" : "18px",
                                    fontWeight: "600",
                                    lineHeight: "1.2"
                                }>
                                    {adaptedProject.title || "Project Title"}
                                </h3>
                                
                                <p style={{
                                    margin: "0 0 8px 0",
                                    fontSize: isMobile ? "13px" : "14px",
                                    opacity: 0.7,
                                    lineHeight: "1.4"
                                }}>
                                    {adaptedProject.description && adaptedProject.description.length > (isMobile ? 80 : 100)
                                        ? adaptedProject.description.substring(0, isMobile ? 80 : 100) + "..."
                                        : adaptedProject.description || "A brief description of the project goes here."}
                                </p>
                                
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: isMobile ? "11px" : "12px",
                                    opacity: 0.6
                                }}>
                                    <span>{adaptedProject.category || "Category"}</span>
                                    <span>{adaptedProject.date || "2024"}</span>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            
            {/* Bottom Sheet */}
            <AnimatePresence>
                {isOpen && selectedProject && (
                    <>
                        {/* Overlay */}
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
                                zIndex: 998
                            }}
                            onClick={closeSheet}
                        />
                        
                        {/* Sheet */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            style={{
                                position: "fixed",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: `${sheetHeight}vh`,
                                backgroundColor: sheetBackgroundColor,
                                borderTopLeftRadius: borderRadius,
                                borderTopRightRadius: borderRadius,
                                boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
                                zIndex: 999,
                                overflowY: "auto",
                                padding: isMobile ? "16px" : "24px"
                            }}
                        >
                            {/* Drag Handle */}
                            <div
                                onMouseDown={handleMouseDown}
                                style={{
                                    width: "40px",
                                    height: "4px",
                                    backgroundColor: "rgba(0,0,0,0.2)",
                                    borderRadius: "2px",
                                    margin: "0 auto 16px",
                                    cursor: isDragging ? "grabbing" : "grab"
                                }}
                            />
                            
                            {/* Close Button */}
                            <button
                                onClick={closeSheet}
                                style={{
                                    position: "absolute",
                                    top: isMobile ? "16px" : "24px",
                                    right: isMobile ? "16px" : "24px",
                                    background: "rgba(0,0,0,0.05)",
                                    border: "none",
                                    borderRadius: "50%",
                                    width: "32px",
                                    height: "32px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "18px"
                                }}
                                aria-label="Close"
                            >
                                ×
                            </button>
                            
                            {/* Project Content */}
                            <div style={{ maxWidth: "800px", margin: "0 auto", color: sheetTextColor }}>
                                {/* Title */}
                                <h1 style={{
                                    margin: "0 0 16px 0",
                                    ...sheetTitleFont,
                                    fontSize: isMobile ? "24px" : sheetTitleFont.fontSize
                                }}>
                                    {selectedProject.title}
                                </h1>
                                
                                {/* Headline */}
                                {!isEmpty(selectedProject.headline) && (
                                    <h2 style={{
                                        margin: "0 0 8px 0",
                                        fontSize: isMobile ? "18px" : "20px",
                                        fontWeight: 600
                                    }}>
                                        {selectedProject.headline}
                                    </h2>
                                )}
                                
                                {/* Subheadline */}
                                {!isEmpty(selectedProject.subheadline) && (
                                    <p style={{
                                        margin: "0 0 24px 0",
                                        ...sheetBodyFont,
                                        opacity: 0.8
                                    }}>
                                        {selectedProject.subheadline}
                                    </p>
                                )}
                                
                                {/* Metrics */}
                                {(isValidNumber(selectedProject.metric1Number) || 
                                  isValidNumber(selectedProject.metric2Number) || 
                                  isValidNumber(selectedProject.metric3Number)) && (
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                                        gap: "16px",
                                        marginBottom: "24px"
                                    }}>
                                        {isValidNumber(selectedProject.metric1Number) && (
                                            <div>
                                                <div style={{ fontSize: "32px", fontWeight: 600 }}>
                                                    {selectedProject.metric1Number}
                                                </div>
                                                <div style={{ fontSize: "14px", opacity: 0.7 }}>
                                                    {selectedProject.metric1Label}
                                                </div>
                                            </div>
                                        )}
                                        {isValidNumber(selectedProject.metric2Number) && (
                                            <div>
                                                <div style={{ fontSize: "32px", fontWeight: 600 }}>
                                                    {selectedProject.metric2Number}
                                                </div>
                                                <div style={{ fontSize: "14px", opacity: 0.7 }}>
                                                    {selectedProject.metric2Label}
                                                </div>
                                            </div>
                                        )}
                                        {isValidNumber(selectedProject.metric3Number) && (
                                            <div>
                                                <div style={{ fontSize: "32px", fontWeight: 600 }}>
                                                    {selectedProject.metric3Number}
                                                </div>
                                                <div style={{ fontSize: "14px", opacity: 0.7 }}>
                                                    {selectedProject.metric3Label}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                                
                                {/* Image */}
                                {selectedProject.image && (
                                    <div style={{
                                        width: "100%",
                                        height: getSheetImageHeight(),
                                        backgroundImage: `url(${selectedProject.image.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: borderRadius,
                                        marginBottom: "24px"
                                    }} />
                                )}
                                
                                {/* Impact */}
                                {!isEmpty(selectedProject.impactTitle) && (
                                    <div style={{ marginBottom: "24px" }}>
                                        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                                            {selectedProject.impactTitle}
                                        </h3>
                                        <p style={{ ...sheetBodyFont, lineHeight: "1.6" }}>
                                            {selectedProject.impactBody}
                                        </p>
                                    </div>
                                )}
                                
                                {/* Background */}
                                {!isEmpty(selectedProject.backgroundTitle) && (
                                    <div style={{ marginBottom: "24px" }}>
                                        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                                            {selectedProject.backgroundTitle}
                                        </h3>
                                        <p style={{ ...sheetBodyFont, lineHeight: "1.6" }}>
                                            {selectedProject.backgroundBody}
                                        </p>
                                    </div>
                                )}
                                
                                {/* Problem */}
                                {!isEmpty(selectedProject.problemTitle) && (
                                    <div style={{ marginBottom: "24px" }}>
                                        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                                            {selectedProject.problemTitle}
                                        </h3>
                                        <p style={{ ...sheetBodyFont, lineHeight: "1.6" }}>
                                            {selectedProject.problemBody}
                                        </p>
                                    </div>
                                )}
                                
                                {/* Features */}
                                {isNonEmptyArray(selectedProject.features) && (
                                    <div style={{ marginBottom: "24px" }}>
                                        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                                            Features
                                        </h3>
                                        <ul style={{ margin: 0, paddingLeft: "20px" }}>
                                            {selectedProject.features.filter(f => !isEmpty(f)).map((feature, i) => (
                                                <li key={i} style={{ marginBottom: "4px" }}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {/* Tags */}
                                {isNonEmptyArray(selectedProject.tags) && (
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "8px",
                                        marginBottom: "24px"
                                    }}>
                                        {selectedProject.tags.filter(t => !isEmpty(t)).map((tag, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    background: "#F5F5F5",
                                                    borderRadius: 16,
                                                    fontSize: "12px",
                                                    padding: "5px 14px",
                                                    fontWeight: 500
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Stats */}
                                {isNonEmptyArray(selectedProject.stats) && (
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "8px"
                                    }}>
                                        {selectedProject.stats
                                            .filter(stat => stat && !isEmpty(stat.name) && !isEmpty(stat.value))
                                            .map((stat, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        background: "#F5F5F5",
                                                        borderRadius: 16,
                                                        fontSize: "12px",
                                                        padding: "5px 14px",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {stat.name}: {stat.value}
                                                </span>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

addPropertyControls(ProjectPreviewBottomSheet, {})

export const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            name: "ProjectPreviewBottomSheet",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
}
