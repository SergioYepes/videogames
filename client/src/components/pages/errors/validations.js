const validate = (formulario,validPlatformNames) => {
    let errors = {};
  
    if (!formulario.name) {
      errors.name = "El nombre es obligatorio";
    } else if (!isNaN(parseInt(formulario.name))) {
      errors.name = "El nombre no puede ser un número";
    } else if (formulario.name.length > 15) {
      errors.name = "El nombre es demasiado largo, por favor, mantenlo más corto";
    }
  
    if (!formulario.released) {
      errors.released = "La fecha de lanzamiento es obligatoria";
    }
  
    if (!formulario.description) {
      errors.description = "La descripción es obligatoria";
    } else if (/\d/.test(formulario.description)) {
        errors.description = "La descripción no puede contener números";
      } else if (formulario.description.length > 200) {
        errors.description = "La descripción no puede superar los 200 caracteres";
      }
  
    if (!formulario.platforms) {
      errors.platforms = "Las plataformas son obligatorias";
    }
    else if (!validPlatformNames.includes(formulario.platforms)) {
      errors.platforms = "Plataforma seleccionada no válida";
    }
  
    if (!formulario.rating) {
      errors.rating = "La calificación es obligatoria";
    } else {
      const parsedRating = parseFloat(formulario.rating);
      if (isNaN(parsedRating)) {
        errors.rating = "La calificación debe ser un número decimal";
      } else if (parsedRating > 5.0) {
        errors.rating = "La calificación no puede ser mayor a 5.0";
      }
    }
    
  
    if (!formulario.background_image) {
      errors.background_image = "La URL de la imagen de fondo es obligatoria";
    }
  
    if (!formulario.genres || formulario.genres.length === 0) {
      errors.genres = "Debe seleccionar al menos un género";
    }
  
    return errors;
  };
  
  export default validate;