import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';



const ModalDetail = (props) =>
    <Modal

        open={props.visible}
        onClose={props.handleClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}
    >
        <div className={props.classes.root}>
            <Paper className={props.classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>

                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <img className={props.classes.img} alt="complex" src={props.dataModal.photo ? props.dataModal.photo.fields.file.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO16IDz68_ChB0bL0KVMaqHOtB_ts835Io5cAWd40ZKS2QRL_w"} />


                                <Typography gutterBottom variant="subtitle1">
                                    {props.dataModal.title}

                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    By: {props.dataModal.chef ? props.dataModal.chef.fields.name : ''}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props.dataModal.description ? props.dataModal.description : ''}
                                </Typography>
                                {props.dataModal.tags && props.dataModal.tags.map((tag, i) => (
                                   <label key={i} >
                                  # {tag.fields.name}
                               </label>  
                                 ))}
                            </Grid>
                            
                        </Grid>
                       
                    </Grid>
                </Grid>
            </Paper>
        </div>

    </Modal>
    ;

export default ModalDetail;