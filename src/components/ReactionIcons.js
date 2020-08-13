import React from 'react';
import {motion} from 'framer-motion';

const ReactionIcons = (props) => {
    return (
        <motion.div initial = {props.initial} variants = {props.variants} animate = {props.hover ? "visible" : "hidden"}>
            <span>Like</span>
            <span>Anger</span>
            <span>Heat</span>
            <span>Dislike</span>
        </motion.div>
    )
}

export default ReactionIcons;