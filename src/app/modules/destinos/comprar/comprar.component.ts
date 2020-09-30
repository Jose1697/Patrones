import { Component, OnInit } from '@angular/core';
import {Viaje} from 'src/app/modules/core/interface/viaje';
import {Destino} from 'src/app/modules/core/interface/destino';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DestinosService } from '../../core/service/destinos/destinos.service';
import { ViajesService } from '../../core/service/viaje/viajes.service';
import { Usuario } from '../../core/interface/usuario';
import { ClienteService } from '../../core/service/cliente/cliente.service';
import { UserService } from '../../core/service/user/user.service';
import { Cliente } from '../../core/interface/cliente';
import { Reserva } from '../../core/interface/reserva';
import { ReservaService } from '../../core/service/reserva/reserva.service';




@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  destino: Destino
  viaje: Viaje
  cliente: Cliente
  reserva: Reserva
  constructor(
    private route: ActivatedRoute,
    private destinoService: DestinosService,
    private viajeService: ViajesService,
    private clienteService: ClienteService,
    public userService: UserService,
    private reservaService: ReservaService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const iddestino = params.id
      const idviaje = params.idb
      this.fetchDestino(iddestino)
      this.fetchViaje(idviaje)
      console.log(iddestino)
      console.log(idviaje);
    })
    // this.BuscarCliente(this.userService.user)
  }

  fetchDestino(id:string){
    this.destinoService.getDestino(id)
      .subscribe(destino => {
        this.destino = destino
      })
  }

  fetchViaje(id:string){
    this.viajeService.getViaje(id)
      .subscribe(viaje => {
        this.viaje = viaje
      })
  }

  comprar(event: Event){
    const cantidad = (<HTMLInputElement>document.getElementById("cantidad")).value
    const cantreserva = cantidad
    console.log(cantreserva);
    
    this.reserva = {
      idcliente: this.userService.cliente.idcliente,
      idviaje: this.viaje.idviaje.toString(),
      cantidad: Number(cantreserva)
    }

    console.log(this.reserva);
    
    this.reservaService.createReserva(this.reserva)
      .subscribe((reserva)=>{
        console.log(reserva);
        
      })
    
    const viaje = {
      idviaje: this.viaje.idviaje,
      iddestino: this.viaje.iddestino,
      hora: this.viaje.hora,
      fecha: this.viaje.fecha,
      capacidad: this.viaje.capacidad - this.reserva.cantidad,
    }

    this.viajeService.updateViaje(this.viaje.idviaje.toString(),viaje)
     .subscribe((el)=>{
        console.log(el);
        
     })

    

    

    alert("La compra se hizo con exito")

    this.router.navigate(['./home'])

  }

  // private BuscarCliente(usuario:Usuario){
  //   this.clienteService.getAllCliente()
  //   .subscribe(clientes => {
  //     this.userService.cliente = clientes.filter(el => { return (el.usuario === this.userService.user.id)})[0]
  //     this.cliente = this.userService.cliente
  //     console.log(this.cliente);
  //   })

  // }

}
