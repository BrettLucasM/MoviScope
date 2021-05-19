//var connection = function(connID, d, m, s, r) {
    //var connectionModel = {connectionID:connID, director:d, movie:m, score:s, review:r};
    //return connectionModel;
//};

//module.exports.connectionModel = connection;

class Connection{

    constructor(connectionID, topic, director, movie, score, review) {
        this.connectionID = connectionID;
        this.topic = topic;
        this.director = director;
        this.movie = movie;
        this.score = score;
        this.review = review;
    }

    getConnectionID(){
        return this.connectionID;
    }
    setConnectionID(value){
        this.connectionID = value;
    }

    getTopic(){
        return this.topic;
    }
    setTopic(value){
        this.topic = value;
    }

    getDirector(){
        return this.director;
    }
    setDirector(value){
        this.director = value;
    }

    getMovie(){
        return this.movie;
    }
    setMovie(value){
        this.movie = value;
    }

    getScore(){
        return this.score;
    }
    setScore(value){
        this.score = value;
    }

    getReview(){
        return this.review;
    }
    setReview(value){
        this.review = value;
    }
}
module.exports = Connection;