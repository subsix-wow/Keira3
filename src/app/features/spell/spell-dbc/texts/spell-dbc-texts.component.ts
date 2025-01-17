import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModelForm } from '@keira-shared/utils/helpers';
import { SpellDbc } from '@keira-types/spell-dbc.type';
import { LOCALES } from './spell-dbc-texts.model';

@Component({
  selector: 'keira-spell-dbc-texts',
  templateUrl: './spell-dbc-texts.component.html',
})
export class SpellDbcTextsComponent {
  readonly LOCALES = LOCALES;
  @Input() formGroup: FormGroup<ModelForm<SpellDbc>>;
}
