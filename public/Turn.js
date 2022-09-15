

class Turn {


static start(drawings){
    SelectionDrawing.open(drawings)
    Time.count();
};



static finish(){
    Time.reset();
    Answer.show();
}





}