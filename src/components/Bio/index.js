import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    bio: {
        display: "flex"
    }
})

export default function Bio() {
    const classes = useStyles()
    return (
        <div className="jumbotron">
            <div className={classes.bio}>
                <div className="headshot">
                    {/* <img src="public/headshots/headshot" alt="Headshot of Leighton wearing a pink shirt"/> */}
                </div>
                <div className="biography">
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>I am a web developer based in Seattle, Washington, who is interested in moving into software
                            development. My
                            interests are in artificial intelligence, augmented reality, virtual reality, and video games.
                            In 2018, I received my BA in Cognitive Behavioral Neuroscience,
                            specializing in behavioral pharmocology, endocrinology, and development.</p>
                        <p>I'm intrigued by what separates an organic brain from an artificial mind and how we can utilize
                            our understanding of human neurology in the development of video game AI, immersive virtual
                            environments, and haptic feedback. Eventually, I'd like to explore opportunities to learn the
                            languages necessary to pursue these interests.</p>
                    </Typography>
                </div>

            </div>
        </div>
    )
}