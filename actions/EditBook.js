// define action within action creator

function EditBook(){
    const EDIT_BOOK = 'EDIT_BOOK';
    return {
        type: EDIT_BOOK,
        cover: "https://s3.amazonaws.com/titlepages.leanpub.com/learnreactvr/hero?1496886273",
        title: "Learn React VR",
        author: "Shamim Khan",
        link: "https://github.com/khanshamim"
    }
}

export default EditBook