import Mobile from "../models/Mobile";


export const renderMobile = async (req, res) => {
    const mobile = await Mobile.find().lean();
  
    /*console.log(mobile);*/
    res.render("mobile", { mobile: mobile });
  };

export const createMobile = async (req, res) => {
    console.log(req.body)
    try {
      //SE AGREGA
      const mobile = Mobile(req.body);
      /*const productoAlmacenado =*/ await mobile.save();
      //console.log(productoAlmacenado); SE USA PARA MOSTRAR LA INFORMACIÓN GUARDADA, EN LA CONSOLA
      res.redirect("/mobile");
    } catch (error) {
      console.log(error)
    }
  };

export const renderEditMobile = async (req, res) => {
    try {
      const mobile = await Mobile.findById(req.params.id).lean(); //Métodos obtenidos de Mongoose
      res.render("editMobile", {mobile});
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateMobile = async (req, res) => {
    const {id} = req.params;
    await Mobile.findByIdAndUpdate(id, req.body);
  
    res.redirect("/mobile");
  };

export const deleteMobile = async (req, res) => {
    const {id} = req.params;
    await Mobile.findByIdAndDelete(id, req.body);
  
    res.redirect("/mobile");
  };

export const statusMobile = async (req, res) => {
    const {id} = req.params;
    const mobile = await Mobile.findById(id);
    //Mando a traer mi propiedad opción que está en el modelo
    mobile.option = !mobile.option;
    await mobile.save();
    res.redirect("/mobile");
  };