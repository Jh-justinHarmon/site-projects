// ProjectHero - Hero section with title, subtitle, and metadata
interface ProjectHeroProps {
    title: string
    subtitle?: string
    year: string
    projectType: string
    role: string
    duration?: string
    platform?: string
}

export default function ProjectHero({
    title,
    subtitle,
    year,
    projectType,
    role,
    duration,
    platform
}: ProjectHeroProps) {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    const containerStyle = {
        maxWidth: "900px",
        margin: "0 auto",
        padding: isMobile ? "48px 16px" : "80px 32px",
        width: "100%"
    }

    const titleStyle = {
        fontSize: isMobile ? "32px" : "48px",
        fontWeight: 600,
        letterSpacing: "-0.03em",
        lineHeight: "1.1",
        margin: "0 0 16px 0",
        color: "#000000"
    }

    const subtitleStyle = {
        fontSize: isMobile ? "18px" : "24px",
        fontWeight: 500,
        letterSpacing: "-0.01em",
        lineHeight: "1.3",
        margin: "0 0 32px 0",
        color: "#666666"
    }

    const metadataContainerStyle = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "12px" : "24px",
        fontSize: "14px",
        color: "#666666"
    }

    const metadataItemStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }

    const metadataLabelStyle = {
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: "#999999"
    }

    const metadataValueStyle = {
        fontSize: "14px",
        fontWeight: 500,
        color: "#000000"
    }

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
            
            <div style={metadataContainerStyle}>
                <div style={metadataItemStyle}>
                    <span style={metadataLabelStyle}>Year</span>
                    <span style={metadataValueStyle}>{year}</span>
                </div>
                <div style={metadataItemStyle}>
                    <span style={metadataLabelStyle}>Type</span>
                    <span style={metadataValueStyle}>{projectType}</span>
                </div>
                <div style={metadataItemStyle}>
                    <span style={metadataLabelStyle}>Role</span>
                    <span style={metadataValueStyle}>{role}</span>
                </div>
                {duration && (
                    <div style={metadataItemStyle}>
                        <span style={metadataLabelStyle}>Duration</span>
                        <span style={metadataValueStyle}>{duration}</span>
                    </div>
                )}
                {platform && (
                    <div style={metadataItemStyle}>
                        <span style={metadataLabelStyle}>Platform</span>
                        <span style={metadataValueStyle}>{platform}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
