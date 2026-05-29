onentsimport * as React from "react"
import { Frame } from "framer"
import * as React from "react"
import { Frame } from "framer"
import { ProjectProvider } from "./ProjectContext"
import ProjectBottomSheet from "./ProjectBottomSheet"
import { addPropertyControls, ControlType } from "framer"

/**
 * A wrapper component that provides the ProjectContext and a global bottom sheet.
 * @framer/component
 */
export default function WrappedPage(props) {
    // Changed function name to WrappedPage
    return (
        <ProjectProvider>
            <Frame background="transparent" width="100%" height="100%">
                {props.children}
                <ProjectBottomSheet />
            </Frame>
        </ProjectProvider>
    )
}

addPropertyControls(WrappedPage, {
    // Updated reference to WrappedPage
    children: {
        type: ControlType.ComponentInstance,
        title: "Children",
    },
})
