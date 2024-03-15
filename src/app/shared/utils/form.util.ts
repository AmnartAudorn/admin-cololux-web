import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtil {
  constructor() {}

  setFormGroup() {
    return new FormGroup({ FormArray: this.setFormArray() });
  }

  setFormArray() {
    return new FormArray([]);
  }

  createFormGroup(controls: FormControls[]) {
    const formGroup: FormGroup = this.setFormGroup();
    if (controls) {
      controls.forEach((control) => {
        formGroup.addControl(
          control.controlName,
          new FormControl({
            value: control.value,
            disabled: control.disabled,
          })
        );
      });
    }

    return formGroup;
  }

  whitespaceValidator(control: FormControl) {
    const isWhitespace =
      typeof control.value !== 'object' &&
      typeof control.value !== 'number' &&
      (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  addDynamicFormControl(
    form: FormArray,
    required: boolean | null = false,
    disable: boolean | null = false
  ) {
    form.push(
      required
        ? new FormControl(
            { value: null, disabled: disable },
            Validators.required
          )
        : new FormControl({ value: null, disabled: disable })
    );

    return form;
  }

  removeDynamicFormControl(form: FormArray, index: number) {
    return form.removeAt(index);
  }
}

export class FormControls {
  constructor(
    public controlName: string,
    public required: boolean | null = false,
    public value: any | null = null,
    public disabled: boolean | null = false
  ) {}
}
