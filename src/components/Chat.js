import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Chat() {
    return (
        <FloatingWhatsApp
            phoneNumber="6371785300"
            accountName="Badri"
            avatar="/images/ez-pizi.png"
            chatMessage="Hello, how can I help you?"
            allowClickAway={true}
        />
    )
}

export default Chat;