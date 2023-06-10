import React, { useState } from "react";
import styles from "./styles.module.css";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

import { TextField, Button, Typography, Paper } from "@mui/material";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectFile: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={styles.paper}>
      <form
        autoCapitalize="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Make a note</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={styles.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={styles.buttonSubmit}
          variant="container"
          size="large"
          type="submit"
          sx={{
            color: "#fff",
            background: "rgb(106, 149, 194)",
            "&:hover": {
              backgroundColor: "rgb(106, 173, 207)",
            },
          }}
          fullWidth
        >
          SUBMIT
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            background: "rgb(255, 110, 121)",
            "&:hover": {
              backgroundColor: "rgb(255, 147, 147)",
            },
          }}
          size="small"
          onClick={clear}
          fullWidth
        >
          CLEAR
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
