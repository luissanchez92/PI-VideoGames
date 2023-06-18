const validation=(form)=>{
    let error={}

    if (!form.name) {
        error.name='(Please complete this field)'
    }
    if(form.name.length>20){
        error.name='(Maximum length 20 characters)'
    }
    if (!form.description){
        error.description='(Please complete this field (250 characters max)'
    }
    if (form.description.length>250){
        error.description='(Maximum length 20 characters)'
    }
    if (!form.released){
        error.released='(Enter publication date)'
    }
    if (!form.rating){
        error.rating='(Please complete this field)'
    }
    if(!/^\d{1,2}(\.\d{1,2})?$/.test(form.rating)){
        error.rating='(Rating must be between 0 and 100, maximum 2 decimal)'
    }
    if (!/\.(jpeg|jpg|gif|png|svg)$/i.test(form.imagen)){
        error.imagen='(The image must be in format jpeg|jpg|gif|png|svg)'
    }
    if(form.platforms.length===0){
        error.platforms='(Select at least 1 platform)'
    }
    if(form.genres.length===0){
        error.genres='(Select at least 1 genre)'
    }
    return error;

}

export default validation
