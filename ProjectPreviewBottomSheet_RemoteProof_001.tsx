import * as React from "react"
import { generatedProjects } from "./generated/generatedProjects"

export default function ProjectPreviewBottomSheet_RemoteProof_001() {
    const project = generatedProjects[0]

    return (
        <div style={{ padding: 24, fontFamily: "Inter, sans-serif" }}>
            <h2>{project.header.headline}</h2>
            <p>{project.title}</p>
            <p>{project.description}</p>
        </div>
    )
}
