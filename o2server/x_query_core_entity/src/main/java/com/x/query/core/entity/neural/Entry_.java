/** 
 *  Generated by OpenJPA MetaModel Generator Tool.
**/

package com.x.query.core.entity.neural;

import com.x.base.core.entity.SliceJpaObject_;
import java.lang.Integer;
import java.lang.String;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;

@javax.persistence.metamodel.StaticMetamodel
(value=com.x.query.core.entity.neural.Entry.class)
@javax.annotation.Generated
(value="org.apache.openjpa.persistence.meta.AnnotationProcessor6",date="Thu Dec 27 11:39:59 CST 2018")
public class Entry_ extends SliceJpaObject_  {
    public static volatile SingularAttribute<Entry,String> bundle;
    public static volatile SingularAttribute<Entry,String> id;
    public static volatile SingularAttribute<Entry,Integer> inValueCount;
    public static volatile ListAttribute<Entry,Integer> inValueLabelList;
    public static volatile SingularAttribute<Entry,Integer> outValueCount;
    public static volatile ListAttribute<Entry,Integer> outValueLabelList;
    public static volatile SingularAttribute<Entry,String> project;
    public static volatile SingularAttribute<Entry,String> title;
    public static volatile SingularAttribute<Entry,String> type;
}
