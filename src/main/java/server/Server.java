package server;

import static spark.Spark.*;
import db.PostgreSql;

public class Server {
    public static void main(String[] args) {

        PostgreSql db = new PostgreSql();

        get("/funds", (req, res) ->
                db.getSum()
        , JsonUtil.json());

        post("/donation", (req,res)-> {
            res.status(201);
            return db.saveDonation(Integer.parseInt(req.queryParams("donation")));
        }, JsonUtil.json());

        after((req, res) -> {
            res.type("application/json");
        });
    }
}
