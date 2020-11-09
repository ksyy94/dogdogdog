import React from 'react';

const Chat = () => {
	return (
		<div>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<title>Document</title>
			<style dangerouslySetInnerHTML={
				{ __html: "\n\t\t#container {\n\t\t\twidth: 220px;\n\t\t\theight: 400px;\n\t\t\tborder: 1px solid black;\n\t\t\tbackground: ivory;\n\t\t}\n\n\t\t#chatView {\n\t\t\theight: 90%;\n\t\t\toverflow-y: scroll;\n\t\t}\n\n\t\t#chatForm {\n\t\t\theight: 10%;\n\t\t\tborder-top: 1px solid black;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#msg {\n\t\t\twidth: 80%;\n\t\t\theight: 32px;\n\t\t\tborder-radius: 8px;\n\t\t}\n\n\t\t#send {\n\t\t\twidth: 16%;\n\t\t\tfont-size: 10px;\n\t\t\theight: 34px;\n\t\t\tborder-radius: 50px;\n\t\t\tbackground: black;\n\t\t\tcolor: white;\n\t\t}\n\n\t\t#msgLine {\n\t\t\tmargin: 15px;\n\t\t}\n\n\t\t#msgBox {\n\t\t\tborder: 1px solid black;\n\t\t\tbackground: skyblue;\n\t\t\tpadding: 2px 5px;\n\t\t\tborder-radius: 10px;\n\t\t}\n\t" }} />
			<div id="container">
				<div id="chatView">
				</div>
				<form id="chatForm" onsubmit="return false">
					<input type="text" id="msg" />
					<input type="submit" id="send" defaultValue="전송" />
				</form>
			</div>
			
		</div>
	);
}
export default Chat;