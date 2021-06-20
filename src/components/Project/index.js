import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {

    },
    media: {

    },
    buttons: {
        justifyContent: "center"
    }
})

export default function ProjectCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea
                href={props.url}
                target="_blank">
                    <CardMedia
                        className={classes.media}
                        image={props.snapshot}
                        title={props.projectName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.projectName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.projectDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.buttons}>
                    <Link
                        href={props.projectRepo}
                        target="_blank"
                        color="black">
                        <GitHubIcon />
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}