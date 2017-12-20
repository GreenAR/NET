import * as express from 'express'
export class Router {
    public static get () {
        const router = express.Router();
        //getall
        router.get('/api', (req, res) => {
            res.json({methode:"getall"});
        });
        //get
        router.get('/api/:id', (req, res) => {
            res.json({methode:"get"});
        });
        //post
        router.post('/api', (req, res) => {
            res.json({methode:"post"});
        });
        //put
        router.put('/api', (req, res) => {
            res.json({methode:"put"});
        });
        //delete
        router.delete('/api', (req, res) => {
                res.json({methode:"delete"});
        });

        return router;

    }
}