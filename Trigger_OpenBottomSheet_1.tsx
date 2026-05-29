Trigger_OpenBottomSheet_1.tsx (ChatGPT version)
[import * as React from "react"
import { useProjectContext } from "./ProjectContext" // ✅ use the correct hook
import { addPropertyControls, ControlType } from "framer"

export default function Trigger__OpenBottomSheet(props) {
    const { openSheet } = useProjectContext() // ✅ use openSheet from context

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: props.backgroundColor,
                borderRadius: props.borderRadius,
                cursor: "pointer",
                padding: props.padding,
            }}
            onClick={() => openSheet(props.projectName)} // ✅ correct usage
        >
            <p style={{ color: "#fff", fontSize: 16, margin: 0 }}>
                {props.label}
            </p>
        </div>
    )
}
