/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assistantdm.core;
import java.util.*;
/**
 *
 * @author chris
 */
public class CharacterUtil {
    public enum CharacterType {PC,NPC,DMPC};
    public Map<Integer,Integer> statBonuses = new HashMap<Integer,Integer>(){{put(1,-5);put(2,-4);put(3,-4);put(4,-3);put(5,-3);put(6,-2);put(7,-2);put(8,-1);put(9,-1);put(10,0);put(11,0);put(12,1);put(13,1);put(14,2);put(15,2);put(16,3);put(17,3);put(18,4);put(19,4);put(20,5);put(21,5);put(22,6);put(23,6);put(24,7);put(25,7);put(26,8);put(27,8);put(28,9);put(29,9);put(30,10);}};
}
