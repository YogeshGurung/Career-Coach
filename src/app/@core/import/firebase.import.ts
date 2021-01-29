import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const FirebaseImportModule = [AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule, AngularFireDatabaseModule, AngularFireAuthModule, AngularFireStorageModule];
