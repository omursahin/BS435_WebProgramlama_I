executeCallBack = (callback) =>{
    setTimeout(callback,1);
};

sleep = (ms) => {
    return new Promise(((resolve, reject) => setTimeout(resolve,ms)));
}

example = async () => {
    console.log("A");
    executeCallBack(async () => {
        console.log("B");
        executeCallBack(()=>{
            console.log("C");
        });
        await sleep(50);
        console.log("D");
    });
    await sleep(52);
    console.log("E");
}

example();

/*
A
B
C
D
E

Neden?
A: İlk çalışan
B: example fonksiyonu async olarak işaretlendi bu yüzden event-loop'ta ilk await'i görene kadar çalışır.
Promise içindeki sleep cevabı en az 200 ms sonra gelecektir. Bu zaman diliminde event-loop boştadır ve callbackler çağırılabilir.
C: İlk callback async olarak işaretlenmiştir ve await görene kadar çalışır. Ardından zaman dilimi boş olduğundan 2. callback çağırılır ve C yazar.
D: callback içindeki sleep(50), sleep(200)'den daha hızlı çalışır ve E'den önce D yazılmış olur.
*/