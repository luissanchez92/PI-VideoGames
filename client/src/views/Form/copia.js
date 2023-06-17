  const handlerChangePlatform= (event) => {
    const { name, checked } = event.target;
    
    setForm((prevFormData) => {
      const {platforms}=prevFormData;
     
      if(checked){
        return {
          ...prevFormData,
          platforms: [...platforms, name],
        };

      }else{
        return {
          ...prevFormData,
          platforms: platforms.filter(element => element !== name),
        };
      }
    });
 };
  
  const handlerChangeGenre=(event)=>{
    const {name, checked}= event.target;

    setForm((formData)=>{
      const {genres}=formData;

      if (checked){
        return {
          ...formData,
          genres:[...genres, name],

        }
      }else{
        return {
          ...formData,
          genres: genres.filter(genre=> genre !==name)
        }
      }
    })
  }



    const handlerChange=(event)=>{
      const property= event.target.name;
      const value= event.target.value;

      const {genres, platforms}=form
      
      if (property===genres || property===platforms){
      
        setForm=()=>{
            if (property){
              return {
                ...form,
                [property]:{...[property], value},
              }
            }else{
              return {
                ...form,
                [property]: [property].filter(elemet=>elemet !==value)
              }
            }
          }
        }
        return setForm
      }

      setForm({...form, [property]:value})
      setError(validation({...form,[property]:value},setForm))
    }
  }
