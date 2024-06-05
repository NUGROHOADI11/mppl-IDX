import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
const Chat = () => {

    return (
        <Button className="floating-button rounded-circle" size="md" variant="success"  href='https://wa.me/6281331620830' target='_blank'>
            <>
                <Icon.Whatsapp />
            </>
        </Button>
    )
}

export default Chat