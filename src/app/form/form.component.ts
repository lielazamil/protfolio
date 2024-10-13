import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm: FormGroup;
  imageUrl: string = '';

  constructor(private router: Router) {
    this.contactForm = new FormGroup({
      email: new FormControl('', [
        // Validators.required,
        Validators.email
      ]),
      username: new FormControl('', [
        // Validators.required,
        Validators.minLength(5)
      ]),
      majorname: new FormControl('', [
        // Validators.required,
        Validators.minLength(5)
      ]),
      phone: new FormControl('', [
        // Validators.required,
        Validators.minLength(10)
      ]),
      education: new FormControl(null),
      img: new FormControl(null, Validators.required),

      // bachalor: new FormControl(null),
      Specialize: new FormControl(null),
      faculty: new FormControl(null),
      resume: new FormControl(null),
      descripe: new FormControl(null),
      graduation: new FormControl(null),
      profileImage: new FormControl(null, Validators.required),
      linkedin: new FormControl(null),
      github: new FormControl(null),
      facebook: new FormControl(null),
      tweeter: new FormControl(null),
      // notes: new FormControl(null),


         // about user info

      titleWorkSkill1:new FormControl(null),
      titleWorkSkill2:new FormControl(null),
      titleWorkSkill3:new FormControl(null),
      titleWorkSkill4:new FormControl(null),
      titleWorkSkill5:new FormControl(null),

      img1: new FormControl(null, Validators.required),
      img2: new FormControl(null, Validators.required),
      img3: new FormControl(null, Validators.required),
      img4: new FormControl(null, Validators.required),
      img5: new FormControl(null, Validators.required),


      //    // track skills
      // trackSkill1:new FormControl(null),
      // trackSkill2:new FormControl(null),
      // trackSkill3:new FormControl(null),
      // trackSkill4:new FormControl(null),

      // for projects
      projectImg1:new FormControl(null),
      projectTitle1:new FormControl(null),
      projectTool1:new FormControl(null),

      projectImg2:new FormControl(null),
      projectTitle2:new FormControl(null),
      projectTool2:new FormControl(null),

      projectImg3:new FormControl(null),
      projectTitle3:new FormControl(null),
      projectTool3:new FormControl(null),

      projectImg4:new FormControl(null),
      projectTitle4:new FormControl(null),
      projectTool4:new FormControl(null),

      projectImg5:new FormControl(null),
      projectTitle5:new FormControl(null),
      projectTool5:new FormControl(null),

      projectImg6:new FormControl(null),
      projectTitle6:new FormControl(null),
      projectTool6:new FormControl(null),

      projectImg7:new FormControl(null),
      projectTitle7:new FormControl(null),
      projectTool7:new FormControl(null),

      projectImg8:new FormControl(null),
      projectTitle8:new FormControl(null),
      projectTool8:new FormControl(null),

      // about Blogs
      // blog1: new FormControl(null),
      // blog1img: new FormControl(null),
      // blog1title:new FormControl(null),
      // blog1description:new FormControl(null),
      // blog1date: new FormControl(null),
      // blog2: new FormControl(null),
      // blog2img: new FormControl(null),
      // blog2title:new FormControl(null),
      // blog2description:new FormControl(null),
      // blog2date: new FormControl(null),
      // blog3: new FormControl(null),
      // blog3img: new FormControl(null),
      // blog3title:new FormControl(null),
      // blog3description:new FormControl(null),
      // blog3date: new FormControl(null),
      // blog4: new FormControl(null),
      // blog4img: new FormControl(null),
      // blog4title:new FormControl(null),
      // blog4description:new FormControl(null),
      // blog4date: new FormControl(null),


    });
  }

  allowedExtensions: string[] = ['pdf', 'jpg', 'jpeg', 'png'];

  onImageUpload(event: any) {
    const file = event.target.files[0];

    if (file) {

      const fileExtension = file.name.split('.').pop().toLowerCase();


      if (this.allowedExtensions.includes(fileExtension)) {

        const fileURL = URL.createObjectURL(file);
        console.log('Uploaded image URL:', fileURL);

        const reader = new FileReader();

        reader.onload = (e: any) => {
          const base64Image = e.target.result;
          this.contactForm.patchValue({
            img: base64Image
          });
        };

        reader.readAsDataURL(file);
      } else {
        console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
      }
    }
  }

// New method for blog1 image upload
// New method for blog4 image upload
onImageUploadProject1(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg1: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProject2(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg2: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProject3(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg3: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProject4(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg4: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProject5(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg5: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProject6(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg6: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProject7(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg7: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}



onImageUploadProject8(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectImg8: base64Image // Update the form control for blog1
        });

      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}


  handleSubmitForm() {
    if (1) {
      this.router.navigate(['User-protfo'], {
        queryParams: {
          username: this.contactForm.value.username,
          email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          education: this.contactForm.value.education,
          bachalor: this.contactForm.value.bachalor,
          Specialize: this.contactForm.value.Specialize,
          faculty: this.contactForm.value.fuculty,
          descripe: this.contactForm.value.descripe,
          tweeter: this.contactForm.value.tweeter,
          resume: this.contactForm.value.resume,
          img: this.contactForm.value.img, // Pass the image data as base64 string
          linkedin: this.contactForm.value.linkedin,
          github: this.contactForm.value.github,
          facebook: this.contactForm.value.facebook,
          
          notes: this.contactForm.value.notes,


                // for about
          titleWorkSkill1:this.contactForm.value.titleWorkSkill1,
          titleWorkSkill2:this.contactForm.value.titleWorkSkill2,
          titleWorkSkill3:this.contactForm.value.titleWorkSkill3,
          titleWorkSkill4:this.contactForm.value.titleWorkSkill4,
          titleWorkSkill5:this.contactForm.value.titleWorkSkill5,

          img1:this.contactForm.value.img1,
          img2:this.contactForm.value.img2,
          img3:this.contactForm.value.img3,
          img4:this.contactForm.value.img4,
          img5:this.contactForm.value.img4,



          // trackSkill1:this.contactForm.value.trackSkill1,
          // trackSkill2:this.contactForm.value.trackSkill2,
          // trackSkill3:this.contactForm.value.trackSkill3,
          // trackSkill4:this.contactForm.value.trackSkill4,

          // for projects
          projectImg1: this.contactForm.value.projectImg1,
          projectTitle1: this.contactForm.value.projectTitle1,
          projectTool1: this.contactForm.value.projectTool1,

          projectImg2: this.contactForm.value.projectImg2,
          projectTitle2: this.contactForm.value.projectTitle2,
          projectTool2: this.contactForm.value.projectTool2,


          projectImg3: this.contactForm.value.projectImg3,
          projectTitle3: this.contactForm.value.projectTitle3,
          projectTool3: this.contactForm.value.projectTool3,

          projectImg4: this.contactForm.value.projectImg4,
          projectTitle4: this.contactForm.value.projectTitle4,
          projectTool4: this.contactForm.value.projectTool4,


          projectImg5: this.contactForm.value.projectImg5,
          projectTitle5: this.contactForm.value.projectTitle5,
          projectTool5: this.contactForm.value.projectTool5,

          projectImg6: this.contactForm.value.projectImg6,
          projectTitle6: this.contactForm.value.projectTitle6,
          projectTool6: this.contactForm.value.projectTool6,

          projectImg7: this.contactForm.value.projectImg7,
          projectTitle7: this.contactForm.value.projectTitle7,
          projectTool7: this.contactForm.value.projectTool7,

          projectImg8: this.contactForm.value.projectImg8,
          projectTitle8: this.contactForm.value.projectTitle8,
          projectTool8: this.contactForm.value.projectTool8,
         
        }
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
