import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

@Component({
  selector: 'app-model-display',
  templateUrl: './model-display.component.html',
  styleUrls: ['./model-display.component.scss']
})
export class ModelDisplayComponent implements AfterViewInit {

  @ViewChild("modelCanvas") canvasRef?: ElementRef;

  cameraZ = 2000;
  fieldOfView = 45;
  nearClippingPlane = 1;
  farClippingPlane = 4000;

  camera!: THREE.PerspectiveCamera;
  loader = new THREE.TextureLoader();

  model!: THREE.Mesh;

  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;

  envMap!: THREE.DataTexture;

  constructor() { }


  ngAfterViewInit(): void {
    this.createScene();
    this.startRender();
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }


  createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    // this.scene.fog = new THREE.Fog(0x72645b, 750, 1500);


    this.setUpLights();
    this.setUpModel();

    const aspectRatio = this.canvas.clientWidth / this.canvas.clientHeight;

    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    );

    // this.camera.position.y = 150;
    this.camera.position.set(120, 120, 120);

  }

  startRender() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    // this.renderer.physicallyCorrectLights = true;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.minDistance = 50;
    controls.maxDistance = 300;

    let component: ModelDisplayComponent = this;
    (function renderLoop() {
      requestAnimationFrame(renderLoop);
      // component.model.rotation.y += 0.01;
      // component.model.rotation.z += 0.01;
      // const timer = Date.now() * 0.00001;

      // component.camera.position.x = Math.cos(timer) * 250;
      // component.camera.position.z = Math.sin(timer) * 250;
      component.camera.lookAt(new THREE.Vector3(0, 25, 0));
      component.renderer.render(component.scene, component.camera);
    }())
  }

  setUpLights() {
    const lightP1 = new THREE.PointLight(0xffffff, 1);
    lightP1.position.set(100, 200, 100)
    this.scene.add(lightP1);

    const lightP2 = new THREE.PointLight(0xffffff, 1);
    lightP2.position.set(-100, 150, 100)
    this.scene.add(lightP1);

    const lightP3 = new THREE.PointLight(0xffffff, 1);
    lightP3.position.set(100, 150, -100)
    this.scene.add(lightP1);

    const lightAmb = new THREE.AmbientLight(0xffffff, .25);
    lightAmb.position.set(500, 500, 500)
    this.scene.add(lightAmb);
  }

  setUpModel() {

    let modelMaterial: THREE.MeshStandardMaterial;
    let planeMaterial: THREE.MeshStandardMaterial;
    let bump = new THREE.TextureLoader().load('../../assets/3DPrintBumpMap.png');

    new RGBELoader()
      .load('../../assets/neon_photostudio_2k.hdr', texture => {

        texture.mapping = THREE.EquirectangularReflectionMapping;

        modelMaterial = new THREE.MeshStandardMaterial({
          color: 0x1e22ff,
          envMap: texture,
          roughness: 0.5,
          metalness: 0.2,
          bumpMap: bump
        });

        planeMaterial = new THREE.MeshStandardMaterial({
          color: 0x999999,
          envMap: texture,
          roughness: 0.1
        });

        const plane = new THREE.Mesh(
          new THREE.PlaneGeometry(500, 500),
          planeMaterial,
        );
        plane.rotation.x = - Math.PI / 2;
        // plane.position.y = - 0.5;
        plane.receiveShadow = true;
        this.scene.add(plane);

        this.scene.background = texture;
      });



    // const plane = new THREE.Mesh(
    //   new THREE.PlaneGeometry(140, 140),
    //   planeMaterial
    // );
    // plane.rotation.x = - Math.PI / 2;
    // plane.position.y = - 0.5;
    // plane.receiveShadow = true;
    // this.scene.add(plane);


    const loader = new STLLoader();
    loader.load('../../assets/3DBenchy.stl', geo => {
      this.model = new THREE.Mesh(geo, modelMaterial);

      this.model.position.set(0, - 0.37, - 0.6);
      this.model.rotation.set(- Math.PI / 2, 0, 0);
      this.model.scale.set(2, 2, 2);

      this.model.castShadow = true;
      this.model.receiveShadow = true;

      this.scene.add(this.model);
    });


  }

}
