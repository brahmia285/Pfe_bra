import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-dashboard',
  templateUrl: './management-dashboard.component.html',
  styleUrls: ['./management-dashboard.component.scss']
})
export class ManagementDashboardComponent implements OnInit {
  // Tableau des formulaires
  formsTableSettings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      name: {
        title: 'Nom du formulaire',
        type: 'string'
      },
      status: {
        title: 'Statut',
        type: 'string'
      },
      responses: {
        title: 'Nombre de réponses',
        type: 'number'
      },
      createdDate: {
        title: 'Date de création',
        type: 'date'
      }
    }
  };

  formsData = [
    {
      id: 1,
      name: 'Satisfaction Client',
      status: 'Actif',
      responses: 150,
      createdDate: new Date('2024-01-01')
    },
    {
      id: 2,
      name: 'Enquête Employés',
      status: 'Inactif',
      responses: 75,
      createdDate: new Date('2024-02-01')
    }
  ];

  // Tableau des utilisateurs
  usersTableSettings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      name: {
        title: 'Nom',
        type: 'string'
      },
      email: {
        title: 'Email',
        type: 'string'
      },
      role: {
        title: 'Rôle',
        type: 'string'
      },
      lastLogin: {
        title: 'Dernière connexion',
        type: 'date'
      }
    }
  };

  usersData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      lastLogin: new Date('2024-03-15')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      lastLogin: new Date('2024-03-14')
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onFormStatusChange(event: any): void {
    console.log('Form status changed:', event);
  }

  onUserRoleChange(event: any): void {
    console.log('User role changed:', event);
  }
}
