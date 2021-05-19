
class Connection{

    constructor(connectionID, RSVP, ConnectionType, Name, Details, Where, When) {
        this.connectionID = connectionID;
        this.RSVP = RSVP;
        this.ConnectionType = ConnectionType;
        this.Name = Name;
        this.Details = Details;
        this.Where = Where;
        this.When = When;

    }

    get CID(){
        return this.connectionID;
    }
    set CID(value){
            this.connectionID = value;
    }

    getRSVP(){
        return this.RSVP;
    }
    setRSVP(value){
        this.RSVP = value;
    }

    getConnectionType(){
        return this.ConnectionType;
    }
    setConnectionType(value){
        this.ConnectionType = value;
    }

    getName(){
        return this.Name;
    }
    setName(value){
        this.Name = value;
    }

    getDetails(){
        return this.Details;
    }
    setDetails(value){
        this.Details = value;
    }

    getWhere(){
        return this.Where;
    }
    setWhere(value){
        this.Where = value;
    }

    getWhen(){
        return this.When;
    }
    setWhen(value){
        this.When = value;
    }
}
module.exports = Connection;