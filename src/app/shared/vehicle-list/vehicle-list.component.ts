import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleList } from './vehicle-list.model';
import { VehicleService } from './vehicle.service';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'placa', 'data', 'velocidade', 'latitude', 'longitude', 'ignicao'];
  vehicleListPosition: any[] = [];
  dataSource = new MatTableDataSource<VehicleList>(this.vehicleListPosition);


  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.vehicleService.apiListAllVehiclePosition.subscribe({
      next: (resp) => {
      this.vehicleListPosition = resp;
      this.dataSource;
      console.log("Posicao: ", resp);
      },
      error: (error) => {
        console.log(error)
      }
    });

    this.vehicleService.apiListAllVehiclePOIs.subscribe({
      next: (resp) => {
      this.vehicleListPosition = resp;
      this.dataSource;
      console.log("POIs: ", resp);
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  // ngAfterViewInit() {
  //   this.vehicleService.apiListAllVehicle.subscribe({
  //     next: (resp) => {
  //     this.vehicleList = resp;
  //     console.log("resultado1: ", resp);
  //     },
  //     error: (error) => {
  //       console.log(error)
  //     }
  //   });
  // }

  // dataSourceValue() {
  //   this.dataSource = new MatTableDataSource<VehicleList>(this.vehicleListPosition);
  // }
}

