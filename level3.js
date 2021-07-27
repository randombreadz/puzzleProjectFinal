function level3(){
    ground.destroy();
    cliff.destroy();
    ground2.destroy();
    cliff2.destroy();
    ground3.destroy();
    helpBob.destroy();
    reach.destroy();
    buttonWords.destroy();
    button.destroy();
    hatch.destroy();
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();

    fake.visible = true
    Rwall1.visible = true;
    Rwall2.visible = true;
    Rwall3.visible = true;
    Rwall4.visible = true;
    Rwall5.visible = true;
    Rwall6.visible = true;
    Rwall7.visible = true;
    Rwall8.visible = true;
    Rwall9.visible = true;
    Rwall10.visible = true;
    Rwall11.visible = true;
    Rwall12.visible = true;
    Rwall13.visible = true;
    Rwall14.visible = true;
    Rwall15.visible = true;
    Rwall16.visible = true;
    Rwall17.visible = true;
    Rwall18.visible = true;
    Rwall19.visible = true;
    Rwall20.visible = true;
    Rwall21.visible = true;
    Rwall22.visible = true;
    Rwall23.visible = true;
    Rwall24.visible = true;
    Rwall25.visible = true;
    Rwall26.visible = true;
    
    bob.setCollider("rectangle", 0.9, -2.4, 5.5, 5.5, 0)
    bob.addAnimation("idle", bob_Cube);
    bob.scale = 5.0;
    bob.x = 180
    bob.y = 250
  }