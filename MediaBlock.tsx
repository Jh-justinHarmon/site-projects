// MediaBlock - Image with optional caption
interface MediaBlockProps {
    src: string
    alt: string
    caption?: string
    size?: "small" | "medium" | "large" | "full"
}

export default function MediaBlock({
    src,
    alt,
    caption,
    size = "large"
}: MediaBlockProps) {
    const getMaxWidth = () => {
        switch (size) {
            case "small": return "400px"
            case "medium": return "600px"
            case "large": return "800px"
            case "full": return "100%"
            default: return "800px"
        }
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    const containerStyle = {
        maxWidth: getMaxWidth(),
        margin: "0 auto",
        width: "100%"
    }

    const imageStyle = {
        width: "100%",
        height: "auto",
        display: "block",
        borderRadius: "8px"
    }

    const captionStyle = {
        fontSize: isMobile ? "13px" : "14px",
        color: "#666666",
        marginTop: "12px",
        textAlign: "center",
        fontStyle: "italic"
    }

    return (
        <div style={containerStyle}>
            <img src={src} alt={alt} style={imageStyle} />
            {caption && <p style={captionStyle}>{caption}</p>}
        </div>
    )
}
