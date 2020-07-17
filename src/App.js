import React, { Component } from 'react';
import ReactImageAnnotate from "react-image-annotate"

const App = () => (
  <ReactImageAnnotate
    selectedImage="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
    taskDescription="# Draw region around each animal."
    images={[{ src: "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg", name: "Image 1" }]}
    regionClsList={["Dog", "Cat"]}
    enabledTools={["create-box"]}
  />
)

export default App;