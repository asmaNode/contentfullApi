import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ModalDetail from './ModaDetail.js';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    gridList: {
        width: 800,
        height: 650,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },

});

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            dataModal: []
        }
    }
    showDetail = (data) => {

        this.setState(({ visible: true, dataModal: data }));
    }
    handleClose = () => {
        this.setState(({ visible: false }));
    };

    render() {
        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList} >
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Our Receipes </ListSubheader>
                    </GridListTile>
                    {this.props.posts.map((post, i) => (
                        <GridListTile key={i} onClick={e => {
                            this.showDetail(post.fields);
                        }}>
                            <img src={post.fields.photo ? post.fields.photo.fields.file.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO16IDz68_ChB0bL0KVMaqHOtB_ts835Io5cAWd40ZKS2QRL_w"} />
                            <GridListTileBar
                                title={post.fields.title ? post.fields.title : post.fields.name}

                                actionIcon={
                                    <IconButton aria-label={`info about ${post.fields.name ? post.fields.title : post.fields.name}`} >

                                    </IconButton>
                                }
                            />
                        </GridListTile>



                    ))}
                    {this.state.visible &&
                        <ModalDetail visible={this.state.visible} classes={classes} dataModal={this.state.dataModal} handleClose={this.handleClose}/>
                    }

                </GridList>

            </div >
        );
    }
}

export default withStyles(styles)(List)





