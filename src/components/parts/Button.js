import React from 'react';
import { motion } from 'framer-motion';
export default function MyButton(props) {

    const { text, clName } = props
    const myStyle = {
        color: "#fff",
        background: "#1890ff",
        border: "1px solid #1890ff ",
        outline: "none",
        fontWeight: "400",
        whiteSpace: "nowrap",
        textAlign: "center",
        padding: "10px 15px",
        fontSize: "14px",
        cursor: "pointer",
        borderRadius:"15px"
    }
    const hoverButton = {
        hover: {
            opacity:.5
       
        }
    }
    return (
        <>
            <motion.button
                style={myStyle}
                className={clName}
                variants ={hoverButton}
                whileHover="hover">
                {text}
            </motion.button>
        </>
    )
}