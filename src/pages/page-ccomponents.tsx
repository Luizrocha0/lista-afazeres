import Badge from "../componentes/badge";
import Button from "../componentes/button";
import ButtonIcon from "../componentes/button-icon";
import Container from "../componentes/container";
import Icon from "../componentes/icons";
import InputCheckbox from "../componentes/input-checkbox";
import InputText from "../componentes/input-text";
import Skeleton from "../componentes/skeleton";
import Text from "../componentes/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"



export default function PageComponents(){
    return (
        <Container>
            <div className="grid gap-3">
                <div className="flex flex-col gaop-1">
                    <Text className="text-pink-base" variant="body-md">Ola mundo!</Text>
                    <Text className="text-pink-base" variant="body-md">Ola mundo!</Text>
                    <Text className="text-pink-base" variant="body-md">Ola mundo!</Text>
                    <Text className="text-pink-base" variant="body-md">Ola mundo!</Text>
                </div>

                <div className="flex gap-1">
                    <Icon svg={TrashIcon}/>
                    <Icon svg={CheckIcon}/>
                    <Icon svg={PencilIcon}/>
                    <Icon svg={PlusIcon}/>
                    <Icon animate svg={SpinnerIcon}/>
                    <Icon  svg={XIcon}/>
                </div>

                <div className="flex gap-1">
                    <Badge variant="primary">5</Badge>
                    <Badge variant="secondary">2 de 5</Badge>
                    <Badge loading>5</Badge>
                </div>

                <div>
                    <Button icon={PlusIcon} >Nova tarefa</Button>
                    <Button icon={PlusIcon}handling >Nova tarefa</Button>
                </div>

                <div className="flex gap-1">
                    <ButtonIcon icon={TrashIcon}/>
                    <ButtonIcon icon={TrashIcon} variant="secondary"/>
                    <ButtonIcon icon={TrashIcon} variant="tertiary"/>
                    <ButtonIcon icon={TrashIcon} loading/>
                    <ButtonIcon icon={TrashIcon} handling/>
                </div>

                <div>
                    <InputText />
                </div>

                <div>
                <InputCheckbox/>
                <InputCheckbox loading/>
                </div>
            </div>

            <div className="flex flex-col gap-3 ">
                <Skeleton className="h-6"/>
                <Skeleton className="h-6"/>
                <Skeleton className="w-96 h-6"/>
            </div>
        </Container>
    )
}