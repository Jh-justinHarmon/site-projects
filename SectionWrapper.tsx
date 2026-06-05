// SectionWrapper - Responsive container with consistent max-width and padding
interface SectionWrapperProps {
    children: React.ReactNode
    maxWidth?: "narrow" | "standard" | "wide" | "full"
    padding?: "small" | "medium" | "large"
    background?: string
}

export default function SectionWrapper({
    children,
    maxWidth = "standard",
    padding = "medium",
    background = "transparent"
}: SectionWrapperProps) {
    const getMaxWidth = () => {
        switch (maxWidth) {
            case "narrow": return "640px"
            case "standard": return "900px"
            case "wide": return "1200px"
            case "full": return "100%"
            default: return "900px"
        }
    }

    const getPadding = () => {
        switch (padding) {
            case "small": return { mobile: "24px 16px", desktop: "24px 32px" }
            case "medium": return { mobile: "48px 16px", desktop: "48px 32px" }
            case "large": return { mobile: "80px 16px", desktop: "80px 32px" }
            default: return { mobile: "48px 16px", desktop: "48px 32px" }
        }
    }

    const paddingValues = getPadding()
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    const style = {
        maxWidth: getMaxWidth(),
        margin: "0 auto",
        padding: isMobile ? paddingValues.mobile : paddingValues.desktop,
        background: background,
        width: "100%"
    }

    return <div style={style}>{children}</div>
}
