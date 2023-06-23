import User from '../models/user.js'
// eslint-disable-next-line no-unused-vars
import  express  from 'express';
import bcrypt from 'bcrypt'

class userContoller {
/**
 * @param {express.Request} req
 * * @param {express.Response} res
 */
static async getUser(req, res){
    const {id} = req.params;
    try {
       const user = await  User.findById(id);
       if(user){
        return res.status(200).json({status: true, message:user})
       }
       res
         .status(404)
         .json({status: false, message: "Utilisateur non trouvé."})
    } catch (e) {
        console.lor("erreur")
        res.status(500).json({message: "Erreur interne du serveur"})
        
    }
}
/**
 * @param {express.Request} req
 * * @param {express.Response} res
 */
static async createUser(req, res){
    // eslint-disable-next-line no-unused-vars
    const {role,password, ...body} = req.body
    try {
        const user =  await User.create({...body,
            password:await bcrypt.hash(password, await bcrypt.genSalt())
        });
        res.status(201).json({status: true, message:{...user.toObject(), password: undefined} })
    } catch (e) {
        res.status(201).json({status: false, message:e.message})
    }
}
/**
 * @param {express.Request} req
 * * @param {express.Response} res
 */
static async deleteUser(req, res){
    const {id}= req.params;
    try {
        await User.deleteOne({_id: id});
        res.json(200).json({status:true, message: 'succès'})
    } catch (error) {
        res.json(200).json({status:true, message: 'succès'})
    }

}
/**
 * @param {express.Request} req
 * * @param {express.Response} res
 */
static async editUser(req, res){
    const {id}= req.params;
    const {role,password, newPassword, userName,...body} = req.body;
    try {
        const user = User.findById(id);
        if(!user){
            res
            .status(404)
            .json({status: false, message: "utilisateur non trouvé"})
        }
        if(await bcrypt.compare(body.password, user.password)){
            if(newPassword){
                const updateUser = await User.updateOne({_id:id}, {...body, password : await bcrypt.hash(newPassword, await bcrypt.genSalt())})
                res
                    .status(200)
                    .json({
                        status: true,
                        message: {
                            ...updateUser, password: undefined
                        }
                    })
            }
            
        }
        res
            .status(404)
            .json({status: false, message: "utilisateur non trouvé"}) 
    } catch (e) {
        res.json({status: false, message: e.message})
        
    }
}
}
export default userContoller