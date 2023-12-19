import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homepageLink: "",
            text: ""
        };
    }

    onLinkChange = (event) => {
        this.setState({homepageLink: event.target.value});
    };

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    };

    render(){

        return(
            <div>
                <h2>React XSS Örneği</h2>

                <div>
                    <p className="inputLink">Anasayfa Linki:</p>
                    <input type="text"
                           className="inputLink"
                           value={this.state.homepageLink}
                           onChange={this.onLinkChange}/>
                </div>

                <br/>

                <div>
                    <p>Text:</p>
                    <textarea  cols="50"
                               rows="5"
                               value={this.state.text}
                               onChange={this.onTextChange} />
                </div>

                <br/>

                <hr/>

                <h3>Gösterilen Değer</h3>

                <a href={this.state.homepageLink} > Anasayfa Linki </a>

                <p>
                    Text: {this.state.text}
                </p>


                <hr/>

                <h3>______________________</h3>

                <p>
                    React text'i "" içerisinde göstereceğinden XSS'den korunmuş olacaktır ve şöyle bir örnek işe yaramayacaktır:
                </p>
                <p>
                    <b>

                    &lt;img src='x'
                         onError="document.getElementsByTagName('body')[0].innerHTML = &amp;quot;&lt;img src='https://keepcalms.com/i/download/600/700/panic-lots-you-just-got-hacked.png'/&gt;&amp;quot;;"/&gt;
                    </b>
                </p>
                <p>
                    Ancak href özelliği varsayılan olarak korunmamaktadır ve URL'in protokol olarak HTTP veya HTTPS kullandığı doğrulanmalıdır.  Aşağıdaki belirtilen kod ile yapılan XSS atağı çalışacaktır.
                    Not: Kodun çalışması için linkin tıklanması gerekmektedir.
                </p>
                <p>
                    <b>javascript:alert('XSS sizleri saygı ile selamlıyor!')</b>
                </p>
                <p>
                    Bu React'ta bilinen bir problemdir (2021) ancak React ilerleyen versiyonlarda bu problemi çözebilir.
                </p>

            </div>


        );

    }
}


ReactDOM.render(<App />, document.getElementById("root"));