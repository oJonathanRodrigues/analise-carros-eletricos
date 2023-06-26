import MenuItem from './MenuItem'

export default function Menu() {

    return (
        <div className="flex gap-2 text-2xl">
            <MenuItem url="#apresentacao" className="hidden sm:flex">
                Apresentação
            </MenuItem>
            <MenuItem url="#tipos" className="hidden sm:flex">
                Tipos
            </MenuItem>
            <MenuItem url="#analise" className="hidden sm:flex">
                Análise econômica
            </MenuItem>            
        </div>
    )
}
