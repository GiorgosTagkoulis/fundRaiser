package server;

import static spark.Spark.*;
import db.PostgreSql;

public class Server {
    public static void main(String[] args) {

        port(8080);
        PostgreSql db = new PostgreSql();

        get("/funds", (req, res) ->
                db.getSum()
        , JsonUtil.json());

        post("/donation", (req,res)-> {
            res.status(201);
            return db.saveDonation(Integer.parseInt(req.body().replaceAll("[^0-9]", "")));
        }, JsonUtil.json());

        // Enable CORS in Spark Java. Credits: https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
        options("/*",
                (request, response) -> {

                    String accessControlRequestHeaders = request
                            .headers("Access-Control-Request-Headers");
                    if (accessControlRequestHeaders != null) {
                        response.header("Access-Control-Allow-Headers",
                                accessControlRequestHeaders);
                    }

                    String accessControlRequestMethod = request
                            .headers("Access-Control-Request-Method");
                    if (accessControlRequestMethod != null) {
                        response.header("Access-Control-Allow-Methods",
                                accessControlRequestMethod);
                    }

                    return "OK";
                });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));


        after((req, res) -> {
            res.type("application/json");
        });
    }
}
