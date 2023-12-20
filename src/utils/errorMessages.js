import passport from "passport"

export const passportError = (Strategy) => {
    return async(req, res, next) => {
        passport.authenticate(Strategy,(erro, user, info) => {
            if(error) { // errores del Token(token no valido,no posse el formato adecuado...)
                return next(error)
            }
            if(!user) {
                return res.status(401).send({error: info.message ? info.message : info.toString()})
            }
            req.user = user
            next()
        } )(req, res, next)
    }

}
export const roleVerification = (role) => {
    return async (req, res, next) => {
        if(!req.user) {
            return res.status(401).send({error: "user no autorizado"})
        }

        if(userAccess.rol != role) {
            return res.status(401).send({error: "User no posee los permisos necesarios"})

        }

        next()
    }

}

